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

import React from 'react';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';
import { DiagramEngine } from '@projectstorm/react-diagrams-core';
import { ConnectionModel } from './ConnectionModel';
import { ConnectionWidget } from './ConnectionWidget';
import { CONNECTION_NODE } from '../../../resources';

export class ConnectionFactory extends AbstractReactFactory<ConnectionModel, DiagramEngine> {
    constructor() {
        super(CONNECTION_NODE);
    }

    generateReactWidget(event: { model: ConnectionModel }): JSX.Element {
        return <ConnectionWidget engine={this.engine} node={event.model} />;
    }

    generateModel(event: { initialConfig: any }) {
        return new ConnectionModel(event.initialConfig.connection);
    }
}
