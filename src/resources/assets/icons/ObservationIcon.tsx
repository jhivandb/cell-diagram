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

import React, { CSSProperties } from "react";

export function ObservationIcon(props: { styles?: CSSProperties }) {
    return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ ...props.styles }}>
            <path
                fill="currentColor"
                d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12v8q0 .825-.587 1.413T20 22zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 .575.075 1.125T4.3 14.2l3.05-3.05q.275-.275.663-.288t.687.238l2.6 2.175L14.575 10H14q-.425 0-.712-.287T13 9q0-.425.288-.712T14 8h3q.425 0 .713.288T18 9v3q0 .425-.288.713T17 13q-.425 0-.712-.288T16 12v-.575l-3.95 3.925q-.275.275-.663.3t-.687-.25l-2.575-2.2l-2.95 2.95q1.05 1.725 2.838 2.788T12 20m7.5.5q.425 0 .713-.288t.287-.712q0-.425-.288-.712T19.5 18.5q-.425 0-.712.288t-.288.712q0 .425.288.713t.712.287M11.375 12"
            />
        </svg>
    );
}
