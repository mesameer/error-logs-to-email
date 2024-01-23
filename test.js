const errorLogsToEmail = require("./error-logs-to-email");

const mailOptions = {
  user: 'user_email',
  pass: 'password',
  to: 'to_user_email',
  subject: 'Error Logs for the Last Hour',
};

const executeAfterSec = 3600; // 1 Hour

global.mailLogger = errorLogsToEmail.logger(executeAfterSec, mailOptions);

mailLogger.error("mail logger is now available for global scope.");