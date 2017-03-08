const test = require('tape')
const namehash = require('../')

// Test results specified in original ENS Proposal:
// https://github.com/ethereum/EIPs/issues/137

test('empty name', (t) => {
  t.plan(1)
  const input = ''
  const expected = '0000000000000000000000000000000000000000000000000000000000000000'
  const output = namehash(input)
  t.equal(output, expected)
})

test('TLD eth', (t) => {
  t.plan(1)
  const input = 'eth'
  const expected = '93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae'
  const output = namehash(input)
  t.equal(output, expected)
})

test('foo.eth', (t) => {
  t.plan(1)
  const input = 'foo.eth'
  const expected = 'de9b09fd7c5f901e23a3f19fecc54828e9c848539801e86591bd9801b019f84f'
  const output = namehash(input)
  t.equal(output, expected)
})

