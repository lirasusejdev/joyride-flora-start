const GithubWorkflowAppender = require('./github-workflow-appender');
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const {LocalPartial} = require('scafflater');

describe('GithubWorkflowAppender', () => {
  const infra = fs.readFileSync(
    path.join(__dirname, '__mocks__/infra.yml'),
    'utf8'
  );
  const code = fs.readFileSync(
    path.join(__dirname, './__mocks__/code.yml'),
    'utf8'
  );
  const codeInfra = fs.readFileSync(
    path.join(__dirname, './__mocks__/code-infra.yml'),
    'utf8'
  );
  const githubWorkflowAppender = new GithubWorkflowAppender();

  test('Merging infra in existing code', async () => {
    const out = await githubWorkflowAppender.append(
      {partial: new LocalPartial('/some/path', 'infra-test', 'testing')},
      infra,
      code
    );
    expect(yaml.load(out.result)).toStrictEqual(yaml.load(codeInfra));
    expect(out.result).toBe(codeInfra);
  });

  test('Merging code in existing infra', async () => {
    const out = await githubWorkflowAppender.append(
      {partial: new LocalPartial('/some/path', 'code-test', 'testing')},
      code,
      infra
    );
    expect(yaml.load(out.result)).toStrictEqual(yaml.load(codeInfra));
    expect(out.result).toBe(codeInfra);
  });
});
