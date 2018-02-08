import $ from 'jquery'
import { run, later } from '@ember/runloop'
import { module, test } from 'qunit'
import startApp from 'dummy/tests/helpers/start-app'

var application

module('Acceptance: Verify CSS Rules', {
  beforeEach: function() {
    application = startApp()
  },

  afterEach: function() {
    run(application, 'destroy')
  }
})

test('check that bourbon and sass are generating css that is getting applied', async assert => {
  await visit('/')

  let fontStack = $('body')
    .css('font-family')
    .split(',')
    .map(s => s.trim())

  assert.ok(
    fontStack.includes('-apple-system'),
    'bourbon $font-stack-system is applied'
  )
  assert.ok(
    fontStack.includes('"Lucida Grande"'),
    'bourbon $font-stack-system is applied'
  )
  assert.ok(
    fontStack.includes('"Helvetica Neue"'),
    'bourbon $font-stack-system is applied'
  )

  let opacity =
    Math.floor(parseFloat($('.devs li:eq(0)').css('opacity')) * 10) / 10.0
  assert.equal(opacity, 0.6, 'opacity')

  await click('button')

  opacity =
    Math.floor(parseFloat($('.devs li:eq(0)').css('opacity')) * 10) / 10.0
  assert.notEqual(opacity, 1.0, 'opacity') // still animating

  later(() => {
    let opacity =
      Math.floor(parseFloat($('.devs li:eq(0)').css('opacity')) * 10) / 10.0
    assert.equal(opacity, 1.0, 'opacity')
  }, 600)
})
