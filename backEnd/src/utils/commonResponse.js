export const commonResponse = {
  itemCreated: (item) => ({
    statusCode: 201,
    message: 'Item criado com sucesso',
    item,
  }),
  itemDeleted: (item) => ({
    statusCode: 200,
    message: 'Item deletado com sucesso',
    item,
  }),
};
