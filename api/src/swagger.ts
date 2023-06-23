import dotenv from "dotenv";
import { paths } from "./routes";
dotenv.config();

// documentation imports

const swaggerJson = `
{
  "swagger": "2.0",
  "info": {
    "version": "1.0.0",
    "title": "Backend API",
    "description": "Api documentation for the Waco Services technical test",
    "license": {
      "name": "MIT",
      "url": "https://opensource.org/licenses/MIT"
    }
  },
  "host": "${process.env.HOST}:${process.env.PORT}",
  "basePath": "/",
  "schemes": [
    "http",
    "https"
  ],
  "consumes": [
    "application/json"
  ],
  "produces": [
    "application/json"
  ],
  "paths": {
    "${paths.auth}/signin": {
      "post": {
        "tags": [
          "Authentication"
        ],
        "summary": "User sign in",
        "description": "Sign in a user with their email and password",
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "description": "User credentials",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "email": {
                  "type": "string"
                },
                "password": {
                  "type": "string"
                }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful sign in",
            "schema": {
              "type": "object",
              "properties": {
                "message": {
                  "type": "string"
                },
                "user": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "string"
                    },
                    "email": {
                      "type": "string"
                    }
                  }
                },
                "token": {
                  "type": "string"
                }
              }
            }
          },
          "401": {
            "description": "Invalid credentials",
            "schema": {
              "type": "object",
              "properties": {
                "message": {
                  "type": "string"
                }
              }
            }
          },
          "500": {
            "description": "Internal server error",
            "schema": {
              "type": "object",
              "properties": {
                "message": {
                  "type": "string"
                }
              }
            }
          }
        }
      }
    },
    "${paths.auth}/signup": {
      "post": {
        "tags": [
          "Authentication"
        ],
        "summary": "User sign up",
        "description": "Create a new user",
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "description": "User details",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "first_name": {
                  "type": "string"
                },
                "last_name": {
                  "type": "string"
                },
                "email": {
                  "type": "string"
                },
                "password": {
                  "type": "string"
                }
              }
            }
          }
        ],
        "responses": {
          "201": {
            "description": "User created successfully",
            "schema": {
              "type": "object",
              "properties": {
                "message": {
                  "type": "string"
                },
                "user": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "string"
                    },
                    "first_name": {
                      "type": "string"
                    },
                    "last_name": {
                      "type": "string"
                    },
                    "email": {
                      "type": "string"
                    }
                  }
                },
                "token": {
                  "type": "string"
                }
              }
            }
          },
          "401": {
            "description": "User already exists",
            "schema": {
              "type": "object",
              "properties": {
                "message": {
                  "type": "string"
                }
              }
            }
          },
          "500": {
            "description": "Internal server error",
            "schema": {
              "type": "object",
              "properties": {
                "message": {
                  "type": "string"
                }
              }
            }
          }
        }
      }
    },
    "${paths.users}": {
      "get": {
        "tags": [
          "Users"
        ],
        "summary": "Get all users",
        "description": "Retrieve a list of all users",
        "responses": {
          "200": {
            "description": "Successful operation",
            "schema": {
              "type": "object",
              "properties": {
                "message": {
                  "type": "string"
                },
                "users": {
                  "type": "array",
                  "items": {
                    "$ref": "#/definitions/User"
                  }
                }
              }
            }
          },
          "500": {
            "description": "Internal server error",
            "schema": {
              "type": "object",
              "properties": {
                "message": {
                  "type": "string"
                }
              }
            }
          }
        }
      }
    },
    "${paths.users}/favorites": {
      "get": {
        "tags": [
          "Users"
        ],
        "summary": "Get all user favorites",
        "description": "Retrieve a list of all user favorites",
        "responses": {
          "200": {
            "description": "Successful operation",
            "schema": {
              "type": "object",
              "properties": {
                "message": {
                  "type": "string"
                },
                "favorites": {
                  "type": "array",
                  "items": {
                    "$ref": "#/definitions/Favorite"
                  }
                }
              }
            }
          },
          "500": {
            "description": "Internal server error",
            "schema": {
              "type": "object",
              "properties": {
                "message": {
                  "type": "string"
                }
              }
            }
          }
        }
      }
    },
    "${paths.users}/favorites/{id}": {
      "get": {
        "tags": [
          "Users"
        ],
        "summary": "Get user favorites by ID",
        "description": "Retrieve a user's favorites by ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "User ID",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation",
            "schema": {
              "type": "object",
              "properties": {
                "message": {
                  "type": "string"
                },
                "favorites": {
                  "type": "array",
                  "items": {
                    "$ref": "#/definitions/Favorite"
                  }
                }
              }
            }
          },
          "500": {
            "description": "Internal server error",
            "schema": {
              "type": "object",
              "properties": {
                "message": {
                  "type": "string"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Users"
        ],
        "summary": "Create user favorite",
        "description": "Create a new favorite for a user",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "User ID",
            "required": true,
            "type": "string"
          },
          {
            "name": "body",
            "in": "body",
            "description": "Favorite details",
            "required": true,
            "schema": {
              "$ref": "#/definitions/Favorite"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation",
            "schema": {
              "type": "object",
              "properties": {
                "message": {
                  "type": "string"
                },
                "favorites": {
                  "type": "object",
                  "properties": {
                    "user": {
                      "type": "string"
                    },
                    "pokemon_id": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "500": {
            "description": "Internal server error",
            "schema": {
              "type": "object",
              "properties": {
                "message": {
                  "type": "string"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": [
          "Users"
        ],
        "summary": "Update user favorite",
        "description": "Update a user's favorite",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "User favorite ID",
            "required": true,
            "type": "string"
          },
          {
            "name": "body",
            "in": "body",
            "description": "Updated favorite details",
            "required": true,
            "schema": {
              "$ref": "#/definitions/Favorite"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation",
            "schema": {
              "type": "object",
              "properties": {
                "message": {
                  "type": "string"
                },
                "favorites": {
                  "type": "object",
                  "properties": {
                    "user": {
                      "type": "string"
                    },
                    "pokemon_id": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "500": {
            "description": "Internal server error",
            "schema": {
              "type": "object",
              "properties": {
                "message": {
                  "type": "string"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": [
          "Users"
        ],
        "summary": "Delete user favorite",
        "description": "Delete a user's favorite",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "User favorite ID",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation",
            "schema": {
              "type": "object",
              "properties": {
                "message": {
                  "type": "string"
                },
                "favorites": {
                  "type": "object",
                  "properties": {
                    "user": {
                      "type": "string"
                    },
                    "pokemon_id": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "500": {
            "description": "Internal server error",
            "schema": {
              "type": "object",
              "properties": {
                "message": {
                  "type": "string"
                }
              }
            }
          }
        }
      }
    }
  },
  "definitions": {
    "User": {
      "type": "object",
      "properties": {
        "first_name": {
          "type": "string"
        },
        "last_name": {
          "type": "string"
        },
        "full_name": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        }
      }
    },
    "Favorite": {
      "type": "object",
      "properties": {
        "user": {
          "type": "string"
        },
        "pokemon_id": {
          "type": "string"
        }
      }
    }
  }
}`;
export { swaggerJson };
