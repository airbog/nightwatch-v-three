module.exports = {
  src_folders: ['features'],
  page_objects_path: 'features/pages',
  custom_commands_path: 'commands',
  
  test_runner: {
    type: 'cucumber',
    options: {
      feature_path: 'features/**/*.feature'
    }
  },

  webdriver: {
    start_process: true,
    port: 9515,
    default_path_prefix: '',
    cli_args: []
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: ['--no-sandbox', '--disable-gpu']
        }
      },
      end_session_on_fail: true,
      skip_testcases_on_fail: false
    }
  }
};