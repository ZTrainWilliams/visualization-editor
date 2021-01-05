/**
 * 导航条上的菜单
 */

export default {
  render() {
    return (
      <a-menu
        theme='dark'
        mode='horizontal'
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px', display: 'inline-block' }}>
        <a-menu-item key='github'>
          <a
            href='https://github.com/RootLinkFE/visualization-editor'
            target='_blank'
            rel='noopener'
            style={{ color: 'white' }}>
            <a-icon type='github' />
            Github
          </a>
        </a-menu-item>
      </a-menu>
    );
  },
};
