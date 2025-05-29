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

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CellDiagram } from "../../../Diagram";
import { Project } from "../../../types";
import { Container, PreviewContainer } from "../../utils";
import { model1 } from "./data/model1";
import { model2 } from "./data/model2";
import { model3 } from "./data/model3";


const meta: Meta<typeof CellDiagram> = {
    title: "Project Diagram/External Component",
    component: CellDiagram,
    decorators: [(Story, context) => {
        const StoryContainer = context.args.previewMode ? PreviewContainer : Container;
        return <StoryContainer>{Story()}</StoryContainer>;
    }],
    parameters: {
        layout: "centered",
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const WithExternalComponents: Story = {
    args: {
        project: model1,
    },
};

export const WithExternalComponentAndOrgLevelConnections: Story = {
    args: {
        project: model2,
    },
};

export const WithExternalComponentAndOrgLevelConnections2: Story = {
    args: {
        project: model3,
    },
};
