/**
 *
 *    Copyright (c) 2020 Silicon Labs
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

const path = require('path')

function testServer(fileName) {
  let testPort
  if (fileName.includes('server-bare.test')) {
    testPort = 9073
  } else if (fileName.includes('server-with-zcl.test')) {
    testPort = 9074
  } else if (fileName.includes('generation.test')) {
    testPort = 9075
  } else if (fileName.includes('server-session.test')) {
    testPort = 9076
  } else {
    let msg = new Error(
      `You must manually assign a port for the given test file: ${fileName}`
    )
    console.log(msg)
    throw msg
  }
  let ret = {
    port: testPort,
    baseUrl: `http://localhost:${testPort++}`,
  }
  return ret
}

const zto = 'ZAP_TEST_TIMEOUT'
const ztoShort = 'ZAP_TEST_TIMEOUT_SHORT'
const ztoMedium = 'ZAP_TEST_TIMEOUT_MEDIUM'
const ztoLong = 'ZAP_TEST_TIMEOUT_LONG'

exports.timeout = {
  short: () => {
    if (ztoShort in process.env) {
      return parseInt(process.env[ztoShort])
    } else if (zto in process.env) {
      return parseInt(process.env[zto])
    } else {
      return 1000
    }
  },
  medium: () => {
    if (ztoMedium in process.env) {
      return parseInt(process.env[ztoMedium])
    } else if (zto in process.env) {
      return parseInt(process.env[zto])
    } else {
      return 5000
    }
  },
  long: () => {
    if (ztoLong in process.env) {
      return parseInt(process.env[ztoLong])
    } else if (zto in process.env) {
      return parseInt(process.env[zto])
    } else {
      return 40000
    }
  },
}

exports.testTemplate = {
  zigbee: './test/gen-template/zigbee/gen-templates.json',
  zigbeeCount: 27,
  matter: './test/gen-template/matter/gen-test.json',
  matterCount: 3,
  dotdot: './test/gen-template/dotdot/dotdot-templates.json',
  dotdotCount: 5,
  unittest: './test/gen-template/test/gen-test.json',
  testCount: 3,
  meta: './test/resource/meta/gen-test.json',
}

exports.testZclMetafile = path.join(__dirname, './resource/meta/zcl.json')

exports.testServer = testServer

exports.testCustomXml = './test/resource/custom-cluster/test-custom.xml'
exports.customClusterXml =
  './test/resource/custom-cluster/custom-bead-cluster.xml'
exports.badTestCustomXml = './test/resource/custom-cluster/bad-test-custom.xml'

exports.totalClusterCount = 111
exports.totalDomainCount = 20
exports.totalCommandArgsCount = 1786
exports.totalCommandCount = 632
exports.totalEventFieldCount = 3
exports.totalEventCount = 1
exports.totalAttributeCount = 3438
exports.totalClusterCommandCount = 609
exports.totalServerAttributeCount = 2962
exports.totalSpecCount = 24
exports.totalEnumCount = 209
exports.totalEnumItemCount = 1595
exports.totalDotDotEnums = 104
exports.totalDotDotEnumItems = 637
