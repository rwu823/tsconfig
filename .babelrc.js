module.exports = {
  presets: [
    ['@babel/env', {

    }],
    '@babel/react',
    ['@babel/stage-0', {
      decoratorsLegacy: true,
      pipelineProposal: 'minimal'
    }],
  ]
}
