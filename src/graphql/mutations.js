/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processOrder = /* GraphQL */ `
  mutation ProcessOrder($input: ProcessOrderInput!) {
    processOrder(input: $input)
  }
`;
export const createPlate = /* GraphQL */ `
  mutation CreatePlate(
    $input: CreatePlateInput!
    $condition: ModelPlateConditionInput
  ) {
    createPlate(input: $input, condition: $condition) {
      id
      name
      description
      image
      own
      featured
      price
      category
      orders {
        items {
          id
          plate_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePlate = /* GraphQL */ `
  mutation UpdatePlate(
    $input: UpdatePlateInput!
    $condition: ModelPlateConditionInput
  ) {
    updatePlate(input: $input, condition: $condition) {
      id
      name
      description
      image
      own
      featured
      price
      category
      orders {
        items {
          id
          plate_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePlate = /* GraphQL */ `
  mutation DeletePlate(
    $input: DeletePlateInput!
    $condition: ModelPlateConditionInput
  ) {
    deletePlate(input: $input, condition: $condition) {
      id
      name
      description
      image
      own
      featured
      price
      category
      orders {
        items {
          id
          plate_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPlateOrder = /* GraphQL */ `
  mutation CreatePlateOrder(
    $input: CreatePlateOrderInput!
    $condition: ModelPlateOrderConditionInput
  ) {
    createPlateOrder(input: $input, condition: $condition) {
      id
      plate_id
      order_id
      order {
        id
        user
        date
        total
        plates {
          nextToken
        }
        createdAt
        updatedAt
        customer
      }
      createdAt
      updatedAt
      plate {
        id
        name
        description
        image
        own
        featured
        price
        category
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      customer
    }
  }
`;
export const updatePlateOrder = /* GraphQL */ `
  mutation UpdatePlateOrder(
    $input: UpdatePlateOrderInput!
    $condition: ModelPlateOrderConditionInput
  ) {
    updatePlateOrder(input: $input, condition: $condition) {
      id
      plate_id
      order_id
      order {
        id
        user
        date
        total
        plates {
          nextToken
        }
        createdAt
        updatedAt
        customer
      }
      createdAt
      updatedAt
      plate {
        id
        name
        description
        image
        own
        featured
        price
        category
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      customer
    }
  }
`;
export const deletePlateOrder = /* GraphQL */ `
  mutation DeletePlateOrder(
    $input: DeletePlateOrderInput!
    $condition: ModelPlateOrderConditionInput
  ) {
    deletePlateOrder(input: $input, condition: $condition) {
      id
      plate_id
      order_id
      order {
        id
        user
        date
        total
        plates {
          nextToken
        }
        createdAt
        updatedAt
        customer
      }
      createdAt
      updatedAt
      plate {
        id
        name
        description
        image
        own
        featured
        price
        category
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      customer
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      plates {
        items {
          id
          plate_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      plates {
        items {
          id
          plate_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      plates {
        items {
          id
          plate_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
