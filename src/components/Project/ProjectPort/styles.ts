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

import { Colors } from "../../../resources";
import styled from "@emotion/styled";

interface PortNodeStyleProps {
  isSelected: boolean;
}
export const PortNode = styled.div<PortNodeStyleProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10px;
  width: 10px;
  background-color: ${(props: PortNodeStyleProps) =>
    props.isSelected ? Colors.SECONDARY_CONTAINER : Colors.SURFACE_DIM};
  border: 2px solid ${(props: PortNodeStyleProps) => (props.isSelected ? Colors.OUTLINE_VARIANT : Colors.OUTLINE)};
  border-radius: 50%;
  margin: -6px 0;
`;

export const TopPortNode = styled(PortNode)<PortNodeStyleProps>`
  top: 0;
  margin: -6px 0;
  align-items: flex-start;
`;

export const BottomPortNode = styled(PortNode)<PortNodeStyleProps>`
  bottom: 0;
  margin: -6px 0;
  align-items: flex-end;
`;

export const LeftPortNode = styled(PortNode)<PortNodeStyleProps>`
  left: 0;
  margin: 0 -6px;
  justify-content: flex-start;
`;

export const RightPortNode = styled(PortNode)<PortNodeStyleProps>`
  right: 0;
  margin: 0 -6px;
  justify-content: flex-end;
`;
