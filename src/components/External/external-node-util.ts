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

import { EXTERNAL_LINK, EXTERNAL_NODE, NAME_JOIN_CHAR } from "../../resources";

export function getExternalNodeName(id: string): string {
    return `${EXTERNAL_NODE}${NAME_JOIN_CHAR}${id}`;
}

export function getExternalNodeMetadataByName(name: string): { type: string; id: string } {
    const parts = name.split(NAME_JOIN_CHAR);
    return { type: parts[0], id: parts[1] };
}

export function getExternalLinkName(source: string, target: string): string {
    return `${EXTERNAL_LINK}${NAME_JOIN_CHAR}${source}::${target}`;
}
