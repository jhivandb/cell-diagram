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

import { DiagramEngine, PortModel } from '@projectstorm/react-diagrams';
import { AbstractModelFactory } from '@projectstorm/react-canvas-core';
import { ConnectionPortModel } from './ConnectionPortModel';

export class ConnectionPortFactory extends AbstractModelFactory<PortModel, DiagramEngine> {
    constructor() {
        super('connectionPort');
    }

    generateModel(event: { initialConfig: any }): ConnectionPortModel {
        return new ConnectionPortModel(event.initialConfig.id, event.initialConfig.portType);
    }
}
