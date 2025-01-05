module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [
        2,
        'always',
        [
          'feat',     // 새로운 기능
          'fix',      // 버그 수정
          'docs',     // 문서 수정
          'style',    // 코드 포맷팅
          'refactor', // 코드 리팩토링
          'test',     // 테스트 코드
          'chore',    // 기타 변경사항
        ],
      ],
    },
  };