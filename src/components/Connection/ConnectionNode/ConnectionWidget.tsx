/*
 * Copyright (c) 2025, WSO2 LLC. (http://www.wso2.com) All Rights Reserved.
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React, { useContext, useEffect, useState } from "react";
import { DiagramEngine } from "@projectstorm/react-diagrams";
import { ConnectionModel } from "./ConnectionModel";
import { ConnectionHeadWidget } from "./ConnectionHead/ConnectionHead";
import { ConnectionName, ConnectionNode } from "./styles";
import { DiagramContext } from "../../DiagramContext/DiagramContext";
import { ComponentLinkModel } from "../../Component/ComponentLink/ComponentLinkModel";

interface ConnectionWidgetProps {
    node: ConnectionModel;
    engine: DiagramEngine;
}

export function ConnectionWidget(props: ConnectionWidgetProps) {
    const { node, engine } = props;
    const { selectedNodeId, focusedNodeId, previewMode } = useContext(DiagramContext);
    const [selectedLink, setSelectedLink] = useState<ComponentLinkModel>(undefined);
    const displayName = node.connection.label || node.connection.id;

    useEffect(() => {
        if (previewMode) {
            return;
        }
        const listener = node.registerListener({
            SELECT: (event: any) => {
                setSelectedLink(event.component as ComponentLinkModel);
            },
            UNSELECT: () => {
                setSelectedLink(undefined);
            },
        });
        return () => {
            node.deregisterListener(listener);
        };
    }, [node]);

    return (
        <ConnectionNode
            previewMode={previewMode}
            isSelected={node.getID() === selectedNodeId || node.isNodeSelected(selectedLink, node.getID())}
            isFocused={node.getID() === focusedNodeId}
            orientation={node.orientation}
        >
            <ConnectionHeadWidget
                engine={engine}
                node={node}
                isSelected={node.getID() === selectedNodeId || node.isNodeSelected(selectedLink, node.getID())}
            />
            {!previewMode && <ConnectionName orientation={node.orientation}>{displayName}</ConnectionName>}
        </ConnectionNode>
    );
}
