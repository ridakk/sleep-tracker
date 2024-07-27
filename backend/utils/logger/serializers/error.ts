import BaseException from '../../../exceptions/BaseException';

export default (
  error: BaseException & {
    original?: { message: string; detail: string; stack: string; sql: string; table: string; constraint: string };
    fields?: string[];
  },
) => {
  let { message, details, stack, extraData } = error;
  const { name, status } = error;

  // exists if error is a Sequelize exception
  if (error.original) {
    if (error.original.message === 'Operation timeout') {
      message = error.message;
      details = '';
      stack = error.stack;
      extraData = {};
    } else {
      message = error.original.message;
      details = error.original.detail;
      stack = error.original.stack;
      extraData = {
        fields: error.fields,
        sql: error.original.sql,
        table: error.original.table,
        constraint: error.original.constraint,
      };
    }
  }

  return {
    type: name,
    message,
    stack,
    details,
    status,
    extraData,
  };
};
