/*
 * Copyright © 2018 Atomist, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as assert from "power-assert";
import { SpringBootSuccessPatterns } from "../../../src/blueprint/deploy/localSpringBootDeployers";

describe("SpringBootSuccessPattern", () => {

    it("should match", () => {
        const s = "Started SpringRestSeedApplication in 3.931 seconds";
        assert(SpringBootSuccessPatterns[1].test(s));
    });

    it("should match slow deployment", () => {
        const s = "Started SpringRestSeedApplication25 in 36.931 seconds";
        assert(SpringBootSuccessPatterns[1].test(s));
    });

});
