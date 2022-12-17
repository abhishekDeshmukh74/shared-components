import { ConfigProvider } from 'antd';
import { LIGHT_THEME } from '../src/theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}


export const decorators = [
  (Story) => (
    <div style={{
      height: '90vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <ConfigProvider
        theme={{
          token: LIGHT_THEME
        }}
      >
        <Story />
      </ConfigProvider>
    </div>
  ),
];
