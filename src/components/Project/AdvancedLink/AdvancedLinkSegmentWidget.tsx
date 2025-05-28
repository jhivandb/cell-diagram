/*
 * Copyright (c) 2025, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
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

import * as React from "react";
import { AdvancedLinkFactory } from "./AdvancedLinkFactory";
import { DiagramEngine } from "@projectstorm/react-diagrams-core";
import { AdvancedLinkModel } from "./AdvancedLinkModel";

export interface AdvancedLinkSegmentWidgetProps {
    path: string;
    link: AdvancedLinkModel;
    selected: boolean;
    forwardRef: React.RefObject<SVGPathElement>;
    factory: AdvancedLinkFactory;
    diagramEngine: DiagramEngine;
    onSelection: (selected: boolean) => any;
    extras: object;
    showArrow?: boolean;
}

export class AdvancedLinkSegmentWidget extends React.Component<AdvancedLinkSegmentWidgetProps> {
    render() {
        const Bottom = React.cloneElement(
            this.props.factory.generateLinkSegment(
                this.props.link,
                this.props.selected,
                this.props.path,
                this.props.showArrow
            ),
            {
                ref: this.props.forwardRef,
            }
        );

        const Top = React.cloneElement(Bottom, {
            strokeLinecap: "round",
            onMouseLeave: () => {
                this.props.onSelection(false);
            },
            onMouseEnter: () => {
                this.props.onSelection(true);
            },
            ...this.props.extras,
            ref: null,
            "data-linkid": this.props.link.getID(),
            strokeOpacity: this.props.selected ? 0.1 : 0,
            strokeWidth: 20,
            fill: "none",
            onContextMenu: () => {
                if (!this.props.link.isLocked()) {
                    event.preventDefault();
                    this.props.link.remove();
                }
            },
        });

        return (
            <g>
                {Bottom}
                {Top}
            </g>
        );
    }
}
