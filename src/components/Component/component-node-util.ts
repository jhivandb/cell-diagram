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

import { COMPONENT_LINK, COMPONENT_NODE, NAME_JOIN_CHAR } from "../../resources";
import { Component } from "../../types";

export function getComponentName(component: Component): string {
    return getComponentNameById(component.id);
}

export function getComponentNameById(id: string): string {
    return `${COMPONENT_NODE}${NAME_JOIN_CHAR}${id}`;
}

export function getComponentMetadataByName(name: string): { type: string; id: string } {
    const parts = name.split(NAME_JOIN_CHAR);
    return { type: parts[0], id: parts[1] };
}

export function getComponentLinkName(source: string, target: string): string {
    return `${COMPONENT_LINK}${NAME_JOIN_CHAR}${source}::${target}`;
}
