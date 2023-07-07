/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.api = (function() {

    /**
     * Namespace api.
     * @exports api
     * @namespace
     */
    var api = {};

    api.chitchat = (function() {

        /**
         * Namespace chitchat.
         * @memberof api
         * @namespace
         */
        var chitchat = {};

        chitchat.CreateChatRequest = (function() {

            /**
             * Properties of a CreateChatRequest.
             * @memberof api.chitchat
             * @interface ICreateChatRequest
             * @property {string|null} [name] CreateChatRequest name
             * @property {string|null} [type] CreateChatRequest type
             * @property {string|null} [token] CreateChatRequest token
             */

            /**
             * Constructs a new CreateChatRequest.
             * @memberof api.chitchat
             * @classdesc Represents a CreateChatRequest.
             * @implements ICreateChatRequest
             * @constructor
             * @param {api.chitchat.ICreateChatRequest=} [properties] Properties to set
             */
            function CreateChatRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CreateChatRequest name.
             * @member {string} name
             * @memberof api.chitchat.CreateChatRequest
             * @instance
             */
            CreateChatRequest.prototype.name = "";

            /**
             * CreateChatRequest type.
             * @member {string} type
             * @memberof api.chitchat.CreateChatRequest
             * @instance
             */
            CreateChatRequest.prototype.type = "";

            /**
             * CreateChatRequest token.
             * @member {string} token
             * @memberof api.chitchat.CreateChatRequest
             * @instance
             */
            CreateChatRequest.prototype.token = "";

            /**
             * Creates a new CreateChatRequest instance using the specified properties.
             * @function create
             * @memberof api.chitchat.CreateChatRequest
             * @static
             * @param {api.chitchat.ICreateChatRequest=} [properties] Properties to set
             * @returns {api.chitchat.CreateChatRequest} CreateChatRequest instance
             */
            CreateChatRequest.create = function create(properties) {
                return new CreateChatRequest(properties);
            };

            /**
             * Encodes the specified CreateChatRequest message. Does not implicitly {@link api.chitchat.CreateChatRequest.verify|verify} messages.
             * @function encode
             * @memberof api.chitchat.CreateChatRequest
             * @static
             * @param {api.chitchat.ICreateChatRequest} message CreateChatRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateChatRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);
                if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.token);
                return writer;
            };

            /**
             * Encodes the specified CreateChatRequest message, length delimited. Does not implicitly {@link api.chitchat.CreateChatRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof api.chitchat.CreateChatRequest
             * @static
             * @param {api.chitchat.ICreateChatRequest} message CreateChatRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateChatRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CreateChatRequest message from the specified reader or buffer.
             * @function decode
             * @memberof api.chitchat.CreateChatRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {api.chitchat.CreateChatRequest} CreateChatRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateChatRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.chitchat.CreateChatRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message.type = reader.string();
                            break;
                        }
                    case 3: {
                            message.token = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CreateChatRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof api.chitchat.CreateChatRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {api.chitchat.CreateChatRequest} CreateChatRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateChatRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CreateChatRequest message.
             * @function verify
             * @memberof api.chitchat.CreateChatRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreateChatRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    if (!$util.isString(message.type))
                        return "type: string expected";
                if (message.token != null && message.hasOwnProperty("token"))
                    if (!$util.isString(message.token))
                        return "token: string expected";
                return null;
            };

            /**
             * Creates a CreateChatRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof api.chitchat.CreateChatRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {api.chitchat.CreateChatRequest} CreateChatRequest
             */
            CreateChatRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.api.chitchat.CreateChatRequest)
                    return object;
                var message = new $root.api.chitchat.CreateChatRequest();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.type != null)
                    message.type = String(object.type);
                if (object.token != null)
                    message.token = String(object.token);
                return message;
            };

            /**
             * Creates a plain object from a CreateChatRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof api.chitchat.CreateChatRequest
             * @static
             * @param {api.chitchat.CreateChatRequest} message CreateChatRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreateChatRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.type = "";
                    object.token = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = message.type;
                if (message.token != null && message.hasOwnProperty("token"))
                    object.token = message.token;
                return object;
            };

            /**
             * Converts this CreateChatRequest to JSON.
             * @function toJSON
             * @memberof api.chitchat.CreateChatRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreateChatRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for CreateChatRequest
             * @function getTypeUrl
             * @memberof api.chitchat.CreateChatRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CreateChatRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/api.chitchat.CreateChatRequest";
            };

            return CreateChatRequest;
        })();

        chitchat.UpdateChatRequest = (function() {

            /**
             * Properties of an UpdateChatRequest.
             * @memberof api.chitchat
             * @interface IUpdateChatRequest
             * @property {string|null} [id] UpdateChatRequest id
             * @property {string|null} [name] UpdateChatRequest name
             * @property {string|null} [token] UpdateChatRequest token
             */

            /**
             * Constructs a new UpdateChatRequest.
             * @memberof api.chitchat
             * @classdesc Represents an UpdateChatRequest.
             * @implements IUpdateChatRequest
             * @constructor
             * @param {api.chitchat.IUpdateChatRequest=} [properties] Properties to set
             */
            function UpdateChatRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UpdateChatRequest id.
             * @member {string} id
             * @memberof api.chitchat.UpdateChatRequest
             * @instance
             */
            UpdateChatRequest.prototype.id = "";

            /**
             * UpdateChatRequest name.
             * @member {string} name
             * @memberof api.chitchat.UpdateChatRequest
             * @instance
             */
            UpdateChatRequest.prototype.name = "";

            /**
             * UpdateChatRequest token.
             * @member {string} token
             * @memberof api.chitchat.UpdateChatRequest
             * @instance
             */
            UpdateChatRequest.prototype.token = "";

            /**
             * Creates a new UpdateChatRequest instance using the specified properties.
             * @function create
             * @memberof api.chitchat.UpdateChatRequest
             * @static
             * @param {api.chitchat.IUpdateChatRequest=} [properties] Properties to set
             * @returns {api.chitchat.UpdateChatRequest} UpdateChatRequest instance
             */
            UpdateChatRequest.create = function create(properties) {
                return new UpdateChatRequest(properties);
            };

            /**
             * Encodes the specified UpdateChatRequest message. Does not implicitly {@link api.chitchat.UpdateChatRequest.verify|verify} messages.
             * @function encode
             * @memberof api.chitchat.UpdateChatRequest
             * @static
             * @param {api.chitchat.IUpdateChatRequest} message UpdateChatRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateChatRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.token);
                return writer;
            };

            /**
             * Encodes the specified UpdateChatRequest message, length delimited. Does not implicitly {@link api.chitchat.UpdateChatRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof api.chitchat.UpdateChatRequest
             * @static
             * @param {api.chitchat.IUpdateChatRequest} message UpdateChatRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateChatRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UpdateChatRequest message from the specified reader or buffer.
             * @function decode
             * @memberof api.chitchat.UpdateChatRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {api.chitchat.UpdateChatRequest} UpdateChatRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateChatRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.chitchat.UpdateChatRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.string();
                            break;
                        }
                    case 2: {
                            message.name = reader.string();
                            break;
                        }
                    case 3: {
                            message.token = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UpdateChatRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof api.chitchat.UpdateChatRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {api.chitchat.UpdateChatRequest} UpdateChatRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateChatRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UpdateChatRequest message.
             * @function verify
             * @memberof api.chitchat.UpdateChatRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdateChatRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.token != null && message.hasOwnProperty("token"))
                    if (!$util.isString(message.token))
                        return "token: string expected";
                return null;
            };

            /**
             * Creates an UpdateChatRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof api.chitchat.UpdateChatRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {api.chitchat.UpdateChatRequest} UpdateChatRequest
             */
            UpdateChatRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.api.chitchat.UpdateChatRequest)
                    return object;
                var message = new $root.api.chitchat.UpdateChatRequest();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.name != null)
                    message.name = String(object.name);
                if (object.token != null)
                    message.token = String(object.token);
                return message;
            };

            /**
             * Creates a plain object from an UpdateChatRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof api.chitchat.UpdateChatRequest
             * @static
             * @param {api.chitchat.UpdateChatRequest} message UpdateChatRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdateChatRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.name = "";
                    object.token = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.token != null && message.hasOwnProperty("token"))
                    object.token = message.token;
                return object;
            };

            /**
             * Converts this UpdateChatRequest to JSON.
             * @function toJSON
             * @memberof api.chitchat.UpdateChatRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdateChatRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UpdateChatRequest
             * @function getTypeUrl
             * @memberof api.chitchat.UpdateChatRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UpdateChatRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/api.chitchat.UpdateChatRequest";
            };

            return UpdateChatRequest;
        })();

        chitchat.DeleteChatRequest = (function() {

            /**
             * Properties of a DeleteChatRequest.
             * @memberof api.chitchat
             * @interface IDeleteChatRequest
             * @property {string|null} [id] DeleteChatRequest id
             * @property {string|null} [token] DeleteChatRequest token
             */

            /**
             * Constructs a new DeleteChatRequest.
             * @memberof api.chitchat
             * @classdesc Represents a DeleteChatRequest.
             * @implements IDeleteChatRequest
             * @constructor
             * @param {api.chitchat.IDeleteChatRequest=} [properties] Properties to set
             */
            function DeleteChatRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DeleteChatRequest id.
             * @member {string} id
             * @memberof api.chitchat.DeleteChatRequest
             * @instance
             */
            DeleteChatRequest.prototype.id = "";

            /**
             * DeleteChatRequest token.
             * @member {string} token
             * @memberof api.chitchat.DeleteChatRequest
             * @instance
             */
            DeleteChatRequest.prototype.token = "";

            /**
             * Creates a new DeleteChatRequest instance using the specified properties.
             * @function create
             * @memberof api.chitchat.DeleteChatRequest
             * @static
             * @param {api.chitchat.IDeleteChatRequest=} [properties] Properties to set
             * @returns {api.chitchat.DeleteChatRequest} DeleteChatRequest instance
             */
            DeleteChatRequest.create = function create(properties) {
                return new DeleteChatRequest(properties);
            };

            /**
             * Encodes the specified DeleteChatRequest message. Does not implicitly {@link api.chitchat.DeleteChatRequest.verify|verify} messages.
             * @function encode
             * @memberof api.chitchat.DeleteChatRequest
             * @static
             * @param {api.chitchat.IDeleteChatRequest} message DeleteChatRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteChatRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
                return writer;
            };

            /**
             * Encodes the specified DeleteChatRequest message, length delimited. Does not implicitly {@link api.chitchat.DeleteChatRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof api.chitchat.DeleteChatRequest
             * @static
             * @param {api.chitchat.IDeleteChatRequest} message DeleteChatRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteChatRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DeleteChatRequest message from the specified reader or buffer.
             * @function decode
             * @memberof api.chitchat.DeleteChatRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {api.chitchat.DeleteChatRequest} DeleteChatRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteChatRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.chitchat.DeleteChatRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.string();
                            break;
                        }
                    case 2: {
                            message.token = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DeleteChatRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof api.chitchat.DeleteChatRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {api.chitchat.DeleteChatRequest} DeleteChatRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteChatRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DeleteChatRequest message.
             * @function verify
             * @memberof api.chitchat.DeleteChatRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeleteChatRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.token != null && message.hasOwnProperty("token"))
                    if (!$util.isString(message.token))
                        return "token: string expected";
                return null;
            };

            /**
             * Creates a DeleteChatRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof api.chitchat.DeleteChatRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {api.chitchat.DeleteChatRequest} DeleteChatRequest
             */
            DeleteChatRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.api.chitchat.DeleteChatRequest)
                    return object;
                var message = new $root.api.chitchat.DeleteChatRequest();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.token != null)
                    message.token = String(object.token);
                return message;
            };

            /**
             * Creates a plain object from a DeleteChatRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof api.chitchat.DeleteChatRequest
             * @static
             * @param {api.chitchat.DeleteChatRequest} message DeleteChatRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeleteChatRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.token = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.token != null && message.hasOwnProperty("token"))
                    object.token = message.token;
                return object;
            };

            /**
             * Converts this DeleteChatRequest to JSON.
             * @function toJSON
             * @memberof api.chitchat.DeleteChatRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeleteChatRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DeleteChatRequest
             * @function getTypeUrl
             * @memberof api.chitchat.DeleteChatRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DeleteChatRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/api.chitchat.DeleteChatRequest";
            };

            return DeleteChatRequest;
        })();

        chitchat.ListChatRequest = (function() {

            /**
             * Properties of a ListChatRequest.
             * @memberof api.chitchat
             * @interface IListChatRequest
             * @property {string|null} [token] ListChatRequest token
             * @property {number|Long|null} [lastCreateTime] ListChatRequest lastCreateTime
             */

            /**
             * Constructs a new ListChatRequest.
             * @memberof api.chitchat
             * @classdesc Represents a ListChatRequest.
             * @implements IListChatRequest
             * @constructor
             * @param {api.chitchat.IListChatRequest=} [properties] Properties to set
             */
            function ListChatRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ListChatRequest token.
             * @member {string} token
             * @memberof api.chitchat.ListChatRequest
             * @instance
             */
            ListChatRequest.prototype.token = "";

            /**
             * ListChatRequest lastCreateTime.
             * @member {number|Long} lastCreateTime
             * @memberof api.chitchat.ListChatRequest
             * @instance
             */
            ListChatRequest.prototype.lastCreateTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new ListChatRequest instance using the specified properties.
             * @function create
             * @memberof api.chitchat.ListChatRequest
             * @static
             * @param {api.chitchat.IListChatRequest=} [properties] Properties to set
             * @returns {api.chitchat.ListChatRequest} ListChatRequest instance
             */
            ListChatRequest.create = function create(properties) {
                return new ListChatRequest(properties);
            };

            /**
             * Encodes the specified ListChatRequest message. Does not implicitly {@link api.chitchat.ListChatRequest.verify|verify} messages.
             * @function encode
             * @memberof api.chitchat.ListChatRequest
             * @static
             * @param {api.chitchat.IListChatRequest} message ListChatRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListChatRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
                if (message.lastCreateTime != null && Object.hasOwnProperty.call(message, "lastCreateTime"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.lastCreateTime);
                return writer;
            };

            /**
             * Encodes the specified ListChatRequest message, length delimited. Does not implicitly {@link api.chitchat.ListChatRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof api.chitchat.ListChatRequest
             * @static
             * @param {api.chitchat.IListChatRequest} message ListChatRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListChatRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ListChatRequest message from the specified reader or buffer.
             * @function decode
             * @memberof api.chitchat.ListChatRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {api.chitchat.ListChatRequest} ListChatRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListChatRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.chitchat.ListChatRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.token = reader.string();
                            break;
                        }
                    case 2: {
                            message.lastCreateTime = reader.int64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ListChatRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof api.chitchat.ListChatRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {api.chitchat.ListChatRequest} ListChatRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListChatRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ListChatRequest message.
             * @function verify
             * @memberof api.chitchat.ListChatRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ListChatRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.token != null && message.hasOwnProperty("token"))
                    if (!$util.isString(message.token))
                        return "token: string expected";
                if (message.lastCreateTime != null && message.hasOwnProperty("lastCreateTime"))
                    if (!$util.isInteger(message.lastCreateTime) && !(message.lastCreateTime && $util.isInteger(message.lastCreateTime.low) && $util.isInteger(message.lastCreateTime.high)))
                        return "lastCreateTime: integer|Long expected";
                return null;
            };

            /**
             * Creates a ListChatRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof api.chitchat.ListChatRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {api.chitchat.ListChatRequest} ListChatRequest
             */
            ListChatRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.api.chitchat.ListChatRequest)
                    return object;
                var message = new $root.api.chitchat.ListChatRequest();
                if (object.token != null)
                    message.token = String(object.token);
                if (object.lastCreateTime != null)
                    if ($util.Long)
                        (message.lastCreateTime = $util.Long.fromValue(object.lastCreateTime)).unsigned = false;
                    else if (typeof object.lastCreateTime === "string")
                        message.lastCreateTime = parseInt(object.lastCreateTime, 10);
                    else if (typeof object.lastCreateTime === "number")
                        message.lastCreateTime = object.lastCreateTime;
                    else if (typeof object.lastCreateTime === "object")
                        message.lastCreateTime = new $util.LongBits(object.lastCreateTime.low >>> 0, object.lastCreateTime.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a ListChatRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof api.chitchat.ListChatRequest
             * @static
             * @param {api.chitchat.ListChatRequest} message ListChatRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ListChatRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.token = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.lastCreateTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.lastCreateTime = options.longs === String ? "0" : 0;
                }
                if (message.token != null && message.hasOwnProperty("token"))
                    object.token = message.token;
                if (message.lastCreateTime != null && message.hasOwnProperty("lastCreateTime"))
                    if (typeof message.lastCreateTime === "number")
                        object.lastCreateTime = options.longs === String ? String(message.lastCreateTime) : message.lastCreateTime;
                    else
                        object.lastCreateTime = options.longs === String ? $util.Long.prototype.toString.call(message.lastCreateTime) : options.longs === Number ? new $util.LongBits(message.lastCreateTime.low >>> 0, message.lastCreateTime.high >>> 0).toNumber() : message.lastCreateTime;
                return object;
            };

            /**
             * Converts this ListChatRequest to JSON.
             * @function toJSON
             * @memberof api.chitchat.ListChatRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ListChatRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ListChatRequest
             * @function getTypeUrl
             * @memberof api.chitchat.ListChatRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ListChatRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/api.chitchat.ListChatRequest";
            };

            return ListChatRequest;
        })();

        chitchat.ChatCommonResponse = (function() {

            /**
             * Properties of a ChatCommonResponse.
             * @memberof api.chitchat
             * @interface IChatCommonResponse
             * @property {string|null} [role] ChatCommonResponse role
             * @property {string|null} [content] ChatCommonResponse content
             */

            /**
             * Constructs a new ChatCommonResponse.
             * @memberof api.chitchat
             * @classdesc Represents a ChatCommonResponse.
             * @implements IChatCommonResponse
             * @constructor
             * @param {api.chitchat.IChatCommonResponse=} [properties] Properties to set
             */
            function ChatCommonResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ChatCommonResponse role.
             * @member {string} role
             * @memberof api.chitchat.ChatCommonResponse
             * @instance
             */
            ChatCommonResponse.prototype.role = "";

            /**
             * ChatCommonResponse content.
             * @member {string} content
             * @memberof api.chitchat.ChatCommonResponse
             * @instance
             */
            ChatCommonResponse.prototype.content = "";

            /**
             * Creates a new ChatCommonResponse instance using the specified properties.
             * @function create
             * @memberof api.chitchat.ChatCommonResponse
             * @static
             * @param {api.chitchat.IChatCommonResponse=} [properties] Properties to set
             * @returns {api.chitchat.ChatCommonResponse} ChatCommonResponse instance
             */
            ChatCommonResponse.create = function create(properties) {
                return new ChatCommonResponse(properties);
            };

            /**
             * Encodes the specified ChatCommonResponse message. Does not implicitly {@link api.chitchat.ChatCommonResponse.verify|verify} messages.
             * @function encode
             * @memberof api.chitchat.ChatCommonResponse
             * @static
             * @param {api.chitchat.IChatCommonResponse} message ChatCommonResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChatCommonResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.role);
                if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
                return writer;
            };

            /**
             * Encodes the specified ChatCommonResponse message, length delimited. Does not implicitly {@link api.chitchat.ChatCommonResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof api.chitchat.ChatCommonResponse
             * @static
             * @param {api.chitchat.IChatCommonResponse} message ChatCommonResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChatCommonResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ChatCommonResponse message from the specified reader or buffer.
             * @function decode
             * @memberof api.chitchat.ChatCommonResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {api.chitchat.ChatCommonResponse} ChatCommonResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChatCommonResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.chitchat.ChatCommonResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.role = reader.string();
                            break;
                        }
                    case 2: {
                            message.content = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ChatCommonResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof api.chitchat.ChatCommonResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {api.chitchat.ChatCommonResponse} ChatCommonResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChatCommonResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ChatCommonResponse message.
             * @function verify
             * @memberof api.chitchat.ChatCommonResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ChatCommonResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.role != null && message.hasOwnProperty("role"))
                    if (!$util.isString(message.role))
                        return "role: string expected";
                if (message.content != null && message.hasOwnProperty("content"))
                    if (!$util.isString(message.content))
                        return "content: string expected";
                return null;
            };

            /**
             * Creates a ChatCommonResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof api.chitchat.ChatCommonResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {api.chitchat.ChatCommonResponse} ChatCommonResponse
             */
            ChatCommonResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.api.chitchat.ChatCommonResponse)
                    return object;
                var message = new $root.api.chitchat.ChatCommonResponse();
                if (object.role != null)
                    message.role = String(object.role);
                if (object.content != null)
                    message.content = String(object.content);
                return message;
            };

            /**
             * Creates a plain object from a ChatCommonResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof api.chitchat.ChatCommonResponse
             * @static
             * @param {api.chitchat.ChatCommonResponse} message ChatCommonResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ChatCommonResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.role = "";
                    object.content = "";
                }
                if (message.role != null && message.hasOwnProperty("role"))
                    object.role = message.role;
                if (message.content != null && message.hasOwnProperty("content"))
                    object.content = message.content;
                return object;
            };

            /**
             * Converts this ChatCommonResponse to JSON.
             * @function toJSON
             * @memberof api.chitchat.ChatCommonResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ChatCommonResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ChatCommonResponse
             * @function getTypeUrl
             * @memberof api.chitchat.ChatCommonResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ChatCommonResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/api.chitchat.ChatCommonResponse";
            };

            return ChatCommonResponse;
        })();

        chitchat.ListChatResponse = (function() {

            /**
             * Properties of a ListChatResponse.
             * @memberof api.chitchat
             * @interface IListChatResponse
             * @property {Array.<api.chitchat.IChatCommonResponse>|null} [chats] ListChatResponse chats
             */

            /**
             * Constructs a new ListChatResponse.
             * @memberof api.chitchat
             * @classdesc Represents a ListChatResponse.
             * @implements IListChatResponse
             * @constructor
             * @param {api.chitchat.IListChatResponse=} [properties] Properties to set
             */
            function ListChatResponse(properties) {
                this.chats = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ListChatResponse chats.
             * @member {Array.<api.chitchat.IChatCommonResponse>} chats
             * @memberof api.chitchat.ListChatResponse
             * @instance
             */
            ListChatResponse.prototype.chats = $util.emptyArray;

            /**
             * Creates a new ListChatResponse instance using the specified properties.
             * @function create
             * @memberof api.chitchat.ListChatResponse
             * @static
             * @param {api.chitchat.IListChatResponse=} [properties] Properties to set
             * @returns {api.chitchat.ListChatResponse} ListChatResponse instance
             */
            ListChatResponse.create = function create(properties) {
                return new ListChatResponse(properties);
            };

            /**
             * Encodes the specified ListChatResponse message. Does not implicitly {@link api.chitchat.ListChatResponse.verify|verify} messages.
             * @function encode
             * @memberof api.chitchat.ListChatResponse
             * @static
             * @param {api.chitchat.IListChatResponse} message ListChatResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListChatResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.chats != null && message.chats.length)
                    for (var i = 0; i < message.chats.length; ++i)
                        $root.api.chitchat.ChatCommonResponse.encode(message.chats[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ListChatResponse message, length delimited. Does not implicitly {@link api.chitchat.ListChatResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof api.chitchat.ListChatResponse
             * @static
             * @param {api.chitchat.IListChatResponse} message ListChatResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListChatResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ListChatResponse message from the specified reader or buffer.
             * @function decode
             * @memberof api.chitchat.ListChatResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {api.chitchat.ListChatResponse} ListChatResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListChatResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.chitchat.ListChatResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.chats && message.chats.length))
                                message.chats = [];
                            message.chats.push($root.api.chitchat.ChatCommonResponse.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ListChatResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof api.chitchat.ListChatResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {api.chitchat.ListChatResponse} ListChatResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListChatResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ListChatResponse message.
             * @function verify
             * @memberof api.chitchat.ListChatResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ListChatResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.chats != null && message.hasOwnProperty("chats")) {
                    if (!Array.isArray(message.chats))
                        return "chats: array expected";
                    for (var i = 0; i < message.chats.length; ++i) {
                        var error = $root.api.chitchat.ChatCommonResponse.verify(message.chats[i]);
                        if (error)
                            return "chats." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ListChatResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof api.chitchat.ListChatResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {api.chitchat.ListChatResponse} ListChatResponse
             */
            ListChatResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.api.chitchat.ListChatResponse)
                    return object;
                var message = new $root.api.chitchat.ListChatResponse();
                if (object.chats) {
                    if (!Array.isArray(object.chats))
                        throw TypeError(".api.chitchat.ListChatResponse.chats: array expected");
                    message.chats = [];
                    for (var i = 0; i < object.chats.length; ++i) {
                        if (typeof object.chats[i] !== "object")
                            throw TypeError(".api.chitchat.ListChatResponse.chats: object expected");
                        message.chats[i] = $root.api.chitchat.ChatCommonResponse.fromObject(object.chats[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ListChatResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof api.chitchat.ListChatResponse
             * @static
             * @param {api.chitchat.ListChatResponse} message ListChatResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ListChatResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.chats = [];
                if (message.chats && message.chats.length) {
                    object.chats = [];
                    for (var j = 0; j < message.chats.length; ++j)
                        object.chats[j] = $root.api.chitchat.ChatCommonResponse.toObject(message.chats[j], options);
                }
                return object;
            };

            /**
             * Converts this ListChatResponse to JSON.
             * @function toJSON
             * @memberof api.chitchat.ListChatResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ListChatResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ListChatResponse
             * @function getTypeUrl
             * @memberof api.chitchat.ListChatResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ListChatResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/api.chitchat.ListChatResponse";
            };

            return ListChatResponse;
        })();

        chitchat.CreateMessageRequest = (function() {

            /**
             * Properties of a CreateMessageRequest.
             * @memberof api.chitchat
             * @interface ICreateMessageRequest
             * @property {string|null} [role] CreateMessageRequest role
             * @property {string|null} [content] CreateMessageRequest content
             */

            /**
             * Constructs a new CreateMessageRequest.
             * @memberof api.chitchat
             * @classdesc Represents a CreateMessageRequest.
             * @implements ICreateMessageRequest
             * @constructor
             * @param {api.chitchat.ICreateMessageRequest=} [properties] Properties to set
             */
            function CreateMessageRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CreateMessageRequest role.
             * @member {string} role
             * @memberof api.chitchat.CreateMessageRequest
             * @instance
             */
            CreateMessageRequest.prototype.role = "";

            /**
             * CreateMessageRequest content.
             * @member {string} content
             * @memberof api.chitchat.CreateMessageRequest
             * @instance
             */
            CreateMessageRequest.prototype.content = "";

            /**
             * Creates a new CreateMessageRequest instance using the specified properties.
             * @function create
             * @memberof api.chitchat.CreateMessageRequest
             * @static
             * @param {api.chitchat.ICreateMessageRequest=} [properties] Properties to set
             * @returns {api.chitchat.CreateMessageRequest} CreateMessageRequest instance
             */
            CreateMessageRequest.create = function create(properties) {
                return new CreateMessageRequest(properties);
            };

            /**
             * Encodes the specified CreateMessageRequest message. Does not implicitly {@link api.chitchat.CreateMessageRequest.verify|verify} messages.
             * @function encode
             * @memberof api.chitchat.CreateMessageRequest
             * @static
             * @param {api.chitchat.ICreateMessageRequest} message CreateMessageRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateMessageRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.role);
                if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
                return writer;
            };

            /**
             * Encodes the specified CreateMessageRequest message, length delimited. Does not implicitly {@link api.chitchat.CreateMessageRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof api.chitchat.CreateMessageRequest
             * @static
             * @param {api.chitchat.ICreateMessageRequest} message CreateMessageRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateMessageRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CreateMessageRequest message from the specified reader or buffer.
             * @function decode
             * @memberof api.chitchat.CreateMessageRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {api.chitchat.CreateMessageRequest} CreateMessageRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateMessageRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.chitchat.CreateMessageRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.role = reader.string();
                            break;
                        }
                    case 2: {
                            message.content = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CreateMessageRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof api.chitchat.CreateMessageRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {api.chitchat.CreateMessageRequest} CreateMessageRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateMessageRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CreateMessageRequest message.
             * @function verify
             * @memberof api.chitchat.CreateMessageRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreateMessageRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.role != null && message.hasOwnProperty("role"))
                    if (!$util.isString(message.role))
                        return "role: string expected";
                if (message.content != null && message.hasOwnProperty("content"))
                    if (!$util.isString(message.content))
                        return "content: string expected";
                return null;
            };

            /**
             * Creates a CreateMessageRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof api.chitchat.CreateMessageRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {api.chitchat.CreateMessageRequest} CreateMessageRequest
             */
            CreateMessageRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.api.chitchat.CreateMessageRequest)
                    return object;
                var message = new $root.api.chitchat.CreateMessageRequest();
                if (object.role != null)
                    message.role = String(object.role);
                if (object.content != null)
                    message.content = String(object.content);
                return message;
            };

            /**
             * Creates a plain object from a CreateMessageRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof api.chitchat.CreateMessageRequest
             * @static
             * @param {api.chitchat.CreateMessageRequest} message CreateMessageRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreateMessageRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.role = "";
                    object.content = "";
                }
                if (message.role != null && message.hasOwnProperty("role"))
                    object.role = message.role;
                if (message.content != null && message.hasOwnProperty("content"))
                    object.content = message.content;
                return object;
            };

            /**
             * Converts this CreateMessageRequest to JSON.
             * @function toJSON
             * @memberof api.chitchat.CreateMessageRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreateMessageRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for CreateMessageRequest
             * @function getTypeUrl
             * @memberof api.chitchat.CreateMessageRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CreateMessageRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/api.chitchat.CreateMessageRequest";
            };

            return CreateMessageRequest;
        })();

        chitchat.CreateMessageResponse = (function() {

            /**
             * Properties of a CreateMessageResponse.
             * @memberof api.chitchat
             * @interface ICreateMessageResponse
             * @property {string|null} [role] CreateMessageResponse role
             * @property {string|null} [content] CreateMessageResponse content
             * @property {boolean|null} [isStart] CreateMessageResponse isStart
             * @property {boolean|null} [isContinue] CreateMessageResponse isContinue
             * @property {boolean|null} [isFinished] CreateMessageResponse isFinished
             */

            /**
             * Constructs a new CreateMessageResponse.
             * @memberof api.chitchat
             * @classdesc Represents a CreateMessageResponse.
             * @implements ICreateMessageResponse
             * @constructor
             * @param {api.chitchat.ICreateMessageResponse=} [properties] Properties to set
             */
            function CreateMessageResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CreateMessageResponse role.
             * @member {string} role
             * @memberof api.chitchat.CreateMessageResponse
             * @instance
             */
            CreateMessageResponse.prototype.role = "";

            /**
             * CreateMessageResponse content.
             * @member {string} content
             * @memberof api.chitchat.CreateMessageResponse
             * @instance
             */
            CreateMessageResponse.prototype.content = "";

            /**
             * CreateMessageResponse isStart.
             * @member {boolean} isStart
             * @memberof api.chitchat.CreateMessageResponse
             * @instance
             */
            CreateMessageResponse.prototype.isStart = false;

            /**
             * CreateMessageResponse isContinue.
             * @member {boolean} isContinue
             * @memberof api.chitchat.CreateMessageResponse
             * @instance
             */
            CreateMessageResponse.prototype.isContinue = false;

            /**
             * CreateMessageResponse isFinished.
             * @member {boolean} isFinished
             * @memberof api.chitchat.CreateMessageResponse
             * @instance
             */
            CreateMessageResponse.prototype.isFinished = false;

            /**
             * Creates a new CreateMessageResponse instance using the specified properties.
             * @function create
             * @memberof api.chitchat.CreateMessageResponse
             * @static
             * @param {api.chitchat.ICreateMessageResponse=} [properties] Properties to set
             * @returns {api.chitchat.CreateMessageResponse} CreateMessageResponse instance
             */
            CreateMessageResponse.create = function create(properties) {
                return new CreateMessageResponse(properties);
            };

            /**
             * Encodes the specified CreateMessageResponse message. Does not implicitly {@link api.chitchat.CreateMessageResponse.verify|verify} messages.
             * @function encode
             * @memberof api.chitchat.CreateMessageResponse
             * @static
             * @param {api.chitchat.ICreateMessageResponse} message CreateMessageResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateMessageResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.role);
                if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
                if (message.isStart != null && Object.hasOwnProperty.call(message, "isStart"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isStart);
                if (message.isContinue != null && Object.hasOwnProperty.call(message, "isContinue"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isContinue);
                if (message.isFinished != null && Object.hasOwnProperty.call(message, "isFinished"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isFinished);
                return writer;
            };

            /**
             * Encodes the specified CreateMessageResponse message, length delimited. Does not implicitly {@link api.chitchat.CreateMessageResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof api.chitchat.CreateMessageResponse
             * @static
             * @param {api.chitchat.ICreateMessageResponse} message CreateMessageResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateMessageResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CreateMessageResponse message from the specified reader or buffer.
             * @function decode
             * @memberof api.chitchat.CreateMessageResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {api.chitchat.CreateMessageResponse} CreateMessageResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateMessageResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.chitchat.CreateMessageResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.role = reader.string();
                            break;
                        }
                    case 2: {
                            message.content = reader.string();
                            break;
                        }
                    case 3: {
                            message.isStart = reader.bool();
                            break;
                        }
                    case 4: {
                            message.isContinue = reader.bool();
                            break;
                        }
                    case 5: {
                            message.isFinished = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CreateMessageResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof api.chitchat.CreateMessageResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {api.chitchat.CreateMessageResponse} CreateMessageResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateMessageResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CreateMessageResponse message.
             * @function verify
             * @memberof api.chitchat.CreateMessageResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreateMessageResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.role != null && message.hasOwnProperty("role"))
                    if (!$util.isString(message.role))
                        return "role: string expected";
                if (message.content != null && message.hasOwnProperty("content"))
                    if (!$util.isString(message.content))
                        return "content: string expected";
                if (message.isStart != null && message.hasOwnProperty("isStart"))
                    if (typeof message.isStart !== "boolean")
                        return "isStart: boolean expected";
                if (message.isContinue != null && message.hasOwnProperty("isContinue"))
                    if (typeof message.isContinue !== "boolean")
                        return "isContinue: boolean expected";
                if (message.isFinished != null && message.hasOwnProperty("isFinished"))
                    if (typeof message.isFinished !== "boolean")
                        return "isFinished: boolean expected";
                return null;
            };

            /**
             * Creates a CreateMessageResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof api.chitchat.CreateMessageResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {api.chitchat.CreateMessageResponse} CreateMessageResponse
             */
            CreateMessageResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.api.chitchat.CreateMessageResponse)
                    return object;
                var message = new $root.api.chitchat.CreateMessageResponse();
                if (object.role != null)
                    message.role = String(object.role);
                if (object.content != null)
                    message.content = String(object.content);
                if (object.isStart != null)
                    message.isStart = Boolean(object.isStart);
                if (object.isContinue != null)
                    message.isContinue = Boolean(object.isContinue);
                if (object.isFinished != null)
                    message.isFinished = Boolean(object.isFinished);
                return message;
            };

            /**
             * Creates a plain object from a CreateMessageResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof api.chitchat.CreateMessageResponse
             * @static
             * @param {api.chitchat.CreateMessageResponse} message CreateMessageResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreateMessageResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.role = "";
                    object.content = "";
                    object.isStart = false;
                    object.isContinue = false;
                    object.isFinished = false;
                }
                if (message.role != null && message.hasOwnProperty("role"))
                    object.role = message.role;
                if (message.content != null && message.hasOwnProperty("content"))
                    object.content = message.content;
                if (message.isStart != null && message.hasOwnProperty("isStart"))
                    object.isStart = message.isStart;
                if (message.isContinue != null && message.hasOwnProperty("isContinue"))
                    object.isContinue = message.isContinue;
                if (message.isFinished != null && message.hasOwnProperty("isFinished"))
                    object.isFinished = message.isFinished;
                return object;
            };

            /**
             * Converts this CreateMessageResponse to JSON.
             * @function toJSON
             * @memberof api.chitchat.CreateMessageResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreateMessageResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for CreateMessageResponse
             * @function getTypeUrl
             * @memberof api.chitchat.CreateMessageResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CreateMessageResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/api.chitchat.CreateMessageResponse";
            };

            return CreateMessageResponse;
        })();

        return chitchat;
    })();

    api.common = (function() {

        /**
         * Namespace common.
         * @memberof api
         * @namespace
         */
        var common = {};

        common.CommonResponse = (function() {

            /**
             * Properties of a CommonResponse.
             * @memberof api.common
             * @interface ICommonResponse
             */

            /**
             * Constructs a new CommonResponse.
             * @memberof api.common
             * @classdesc Represents a CommonResponse.
             * @implements ICommonResponse
             * @constructor
             * @param {api.common.ICommonResponse=} [properties] Properties to set
             */
            function CommonResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new CommonResponse instance using the specified properties.
             * @function create
             * @memberof api.common.CommonResponse
             * @static
             * @param {api.common.ICommonResponse=} [properties] Properties to set
             * @returns {api.common.CommonResponse} CommonResponse instance
             */
            CommonResponse.create = function create(properties) {
                return new CommonResponse(properties);
            };

            /**
             * Encodes the specified CommonResponse message. Does not implicitly {@link api.common.CommonResponse.verify|verify} messages.
             * @function encode
             * @memberof api.common.CommonResponse
             * @static
             * @param {api.common.ICommonResponse} message CommonResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CommonResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified CommonResponse message, length delimited. Does not implicitly {@link api.common.CommonResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof api.common.CommonResponse
             * @static
             * @param {api.common.ICommonResponse} message CommonResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CommonResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CommonResponse message from the specified reader or buffer.
             * @function decode
             * @memberof api.common.CommonResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {api.common.CommonResponse} CommonResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CommonResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.common.CommonResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CommonResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof api.common.CommonResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {api.common.CommonResponse} CommonResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CommonResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CommonResponse message.
             * @function verify
             * @memberof api.common.CommonResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CommonResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a CommonResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof api.common.CommonResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {api.common.CommonResponse} CommonResponse
             */
            CommonResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.api.common.CommonResponse)
                    return object;
                return new $root.api.common.CommonResponse();
            };

            /**
             * Creates a plain object from a CommonResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof api.common.CommonResponse
             * @static
             * @param {api.common.CommonResponse} message CommonResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CommonResponse.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this CommonResponse to JSON.
             * @function toJSON
             * @memberof api.common.CommonResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CommonResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for CommonResponse
             * @function getTypeUrl
             * @memberof api.common.CommonResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CommonResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/api.common.CommonResponse";
            };

            return CommonResponse;
        })();

        common.PopupErrorResponse = (function() {

            /**
             * Properties of a PopupErrorResponse.
             * @memberof api.common
             * @interface IPopupErrorResponse
             * @property {string|null} [id] PopupErrorResponse id
             * @property {string|null} [error] PopupErrorResponse error
             */

            /**
             * Constructs a new PopupErrorResponse.
             * @memberof api.common
             * @classdesc Represents a PopupErrorResponse.
             * @implements IPopupErrorResponse
             * @constructor
             * @param {api.common.IPopupErrorResponse=} [properties] Properties to set
             */
            function PopupErrorResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PopupErrorResponse id.
             * @member {string} id
             * @memberof api.common.PopupErrorResponse
             * @instance
             */
            PopupErrorResponse.prototype.id = "";

            /**
             * PopupErrorResponse error.
             * @member {string} error
             * @memberof api.common.PopupErrorResponse
             * @instance
             */
            PopupErrorResponse.prototype.error = "";

            /**
             * Creates a new PopupErrorResponse instance using the specified properties.
             * @function create
             * @memberof api.common.PopupErrorResponse
             * @static
             * @param {api.common.IPopupErrorResponse=} [properties] Properties to set
             * @returns {api.common.PopupErrorResponse} PopupErrorResponse instance
             */
            PopupErrorResponse.create = function create(properties) {
                return new PopupErrorResponse(properties);
            };

            /**
             * Encodes the specified PopupErrorResponse message. Does not implicitly {@link api.common.PopupErrorResponse.verify|verify} messages.
             * @function encode
             * @memberof api.common.PopupErrorResponse
             * @static
             * @param {api.common.IPopupErrorResponse} message PopupErrorResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PopupErrorResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.error);
                return writer;
            };

            /**
             * Encodes the specified PopupErrorResponse message, length delimited. Does not implicitly {@link api.common.PopupErrorResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof api.common.PopupErrorResponse
             * @static
             * @param {api.common.IPopupErrorResponse} message PopupErrorResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PopupErrorResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PopupErrorResponse message from the specified reader or buffer.
             * @function decode
             * @memberof api.common.PopupErrorResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {api.common.PopupErrorResponse} PopupErrorResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PopupErrorResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.common.PopupErrorResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.string();
                            break;
                        }
                    case 2: {
                            message.error = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PopupErrorResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof api.common.PopupErrorResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {api.common.PopupErrorResponse} PopupErrorResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PopupErrorResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PopupErrorResponse message.
             * @function verify
             * @memberof api.common.PopupErrorResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PopupErrorResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.error != null && message.hasOwnProperty("error"))
                    if (!$util.isString(message.error))
                        return "error: string expected";
                return null;
            };

            /**
             * Creates a PopupErrorResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof api.common.PopupErrorResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {api.common.PopupErrorResponse} PopupErrorResponse
             */
            PopupErrorResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.api.common.PopupErrorResponse)
                    return object;
                var message = new $root.api.common.PopupErrorResponse();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.error != null)
                    message.error = String(object.error);
                return message;
            };

            /**
             * Creates a plain object from a PopupErrorResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof api.common.PopupErrorResponse
             * @static
             * @param {api.common.PopupErrorResponse} message PopupErrorResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PopupErrorResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.error = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = message.error;
                return object;
            };

            /**
             * Converts this PopupErrorResponse to JSON.
             * @function toJSON
             * @memberof api.common.PopupErrorResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PopupErrorResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PopupErrorResponse
             * @function getTypeUrl
             * @memberof api.common.PopupErrorResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PopupErrorResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/api.common.PopupErrorResponse";
            };

            return PopupErrorResponse;
        })();

        common.PingRequest = (function() {

            /**
             * Properties of a PingRequest.
             * @memberof api.common
             * @interface IPingRequest
             */

            /**
             * Constructs a new PingRequest.
             * @memberof api.common
             * @classdesc Represents a PingRequest.
             * @implements IPingRequest
             * @constructor
             * @param {api.common.IPingRequest=} [properties] Properties to set
             */
            function PingRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new PingRequest instance using the specified properties.
             * @function create
             * @memberof api.common.PingRequest
             * @static
             * @param {api.common.IPingRequest=} [properties] Properties to set
             * @returns {api.common.PingRequest} PingRequest instance
             */
            PingRequest.create = function create(properties) {
                return new PingRequest(properties);
            };

            /**
             * Encodes the specified PingRequest message. Does not implicitly {@link api.common.PingRequest.verify|verify} messages.
             * @function encode
             * @memberof api.common.PingRequest
             * @static
             * @param {api.common.IPingRequest} message PingRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PingRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified PingRequest message, length delimited. Does not implicitly {@link api.common.PingRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof api.common.PingRequest
             * @static
             * @param {api.common.IPingRequest} message PingRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PingRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PingRequest message from the specified reader or buffer.
             * @function decode
             * @memberof api.common.PingRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {api.common.PingRequest} PingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PingRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.common.PingRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PingRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof api.common.PingRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {api.common.PingRequest} PingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PingRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PingRequest message.
             * @function verify
             * @memberof api.common.PingRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PingRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a PingRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof api.common.PingRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {api.common.PingRequest} PingRequest
             */
            PingRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.api.common.PingRequest)
                    return object;
                return new $root.api.common.PingRequest();
            };

            /**
             * Creates a plain object from a PingRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof api.common.PingRequest
             * @static
             * @param {api.common.PingRequest} message PingRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PingRequest.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this PingRequest to JSON.
             * @function toJSON
             * @memberof api.common.PingRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PingRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PingRequest
             * @function getTypeUrl
             * @memberof api.common.PingRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PingRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/api.common.PingRequest";
            };

            return PingRequest;
        })();

        common.PingResponse = (function() {

            /**
             * Properties of a PingResponse.
             * @memberof api.common
             * @interface IPingResponse
             */

            /**
             * Constructs a new PingResponse.
             * @memberof api.common
             * @classdesc Represents a PingResponse.
             * @implements IPingResponse
             * @constructor
             * @param {api.common.IPingResponse=} [properties] Properties to set
             */
            function PingResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new PingResponse instance using the specified properties.
             * @function create
             * @memberof api.common.PingResponse
             * @static
             * @param {api.common.IPingResponse=} [properties] Properties to set
             * @returns {api.common.PingResponse} PingResponse instance
             */
            PingResponse.create = function create(properties) {
                return new PingResponse(properties);
            };

            /**
             * Encodes the specified PingResponse message. Does not implicitly {@link api.common.PingResponse.verify|verify} messages.
             * @function encode
             * @memberof api.common.PingResponse
             * @static
             * @param {api.common.IPingResponse} message PingResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PingResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified PingResponse message, length delimited. Does not implicitly {@link api.common.PingResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof api.common.PingResponse
             * @static
             * @param {api.common.IPingResponse} message PingResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PingResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PingResponse message from the specified reader or buffer.
             * @function decode
             * @memberof api.common.PingResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {api.common.PingResponse} PingResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PingResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.common.PingResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PingResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof api.common.PingResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {api.common.PingResponse} PingResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PingResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PingResponse message.
             * @function verify
             * @memberof api.common.PingResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PingResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a PingResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof api.common.PingResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {api.common.PingResponse} PingResponse
             */
            PingResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.api.common.PingResponse)
                    return object;
                return new $root.api.common.PingResponse();
            };

            /**
             * Creates a plain object from a PingResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof api.common.PingResponse
             * @static
             * @param {api.common.PingResponse} message PingResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PingResponse.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this PingResponse to JSON.
             * @function toJSON
             * @memberof api.common.PingResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PingResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PingResponse
             * @function getTypeUrl
             * @memberof api.common.PingResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PingResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/api.common.PingResponse";
            };

            return PingResponse;
        })();

        return common;
    })();

    api.user = (function() {

        /**
         * Namespace user.
         * @memberof api
         * @namespace
         */
        var user = {};

        user.UserSignUpRequest = (function() {

            /**
             * Properties of a UserSignUpRequest.
             * @memberof api.user
             * @interface IUserSignUpRequest
             * @property {string|null} [username] UserSignUpRequest username
             * @property {string|null} [password] UserSignUpRequest password
             */

            /**
             * Constructs a new UserSignUpRequest.
             * @memberof api.user
             * @classdesc Represents a UserSignUpRequest.
             * @implements IUserSignUpRequest
             * @constructor
             * @param {api.user.IUserSignUpRequest=} [properties] Properties to set
             */
            function UserSignUpRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UserSignUpRequest username.
             * @member {string} username
             * @memberof api.user.UserSignUpRequest
             * @instance
             */
            UserSignUpRequest.prototype.username = "";

            /**
             * UserSignUpRequest password.
             * @member {string} password
             * @memberof api.user.UserSignUpRequest
             * @instance
             */
            UserSignUpRequest.prototype.password = "";

            /**
             * Creates a new UserSignUpRequest instance using the specified properties.
             * @function create
             * @memberof api.user.UserSignUpRequest
             * @static
             * @param {api.user.IUserSignUpRequest=} [properties] Properties to set
             * @returns {api.user.UserSignUpRequest} UserSignUpRequest instance
             */
            UserSignUpRequest.create = function create(properties) {
                return new UserSignUpRequest(properties);
            };

            /**
             * Encodes the specified UserSignUpRequest message. Does not implicitly {@link api.user.UserSignUpRequest.verify|verify} messages.
             * @function encode
             * @memberof api.user.UserSignUpRequest
             * @static
             * @param {api.user.IUserSignUpRequest} message UserSignUpRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserSignUpRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
                if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
                return writer;
            };

            /**
             * Encodes the specified UserSignUpRequest message, length delimited. Does not implicitly {@link api.user.UserSignUpRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof api.user.UserSignUpRequest
             * @static
             * @param {api.user.IUserSignUpRequest} message UserSignUpRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserSignUpRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UserSignUpRequest message from the specified reader or buffer.
             * @function decode
             * @memberof api.user.UserSignUpRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {api.user.UserSignUpRequest} UserSignUpRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserSignUpRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.user.UserSignUpRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.username = reader.string();
                            break;
                        }
                    case 2: {
                            message.password = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a UserSignUpRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof api.user.UserSignUpRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {api.user.UserSignUpRequest} UserSignUpRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserSignUpRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UserSignUpRequest message.
             * @function verify
             * @memberof api.user.UserSignUpRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UserSignUpRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.username != null && message.hasOwnProperty("username"))
                    if (!$util.isString(message.username))
                        return "username: string expected";
                if (message.password != null && message.hasOwnProperty("password"))
                    if (!$util.isString(message.password))
                        return "password: string expected";
                return null;
            };

            /**
             * Creates a UserSignUpRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof api.user.UserSignUpRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {api.user.UserSignUpRequest} UserSignUpRequest
             */
            UserSignUpRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.api.user.UserSignUpRequest)
                    return object;
                var message = new $root.api.user.UserSignUpRequest();
                if (object.username != null)
                    message.username = String(object.username);
                if (object.password != null)
                    message.password = String(object.password);
                return message;
            };

            /**
             * Creates a plain object from a UserSignUpRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof api.user.UserSignUpRequest
             * @static
             * @param {api.user.UserSignUpRequest} message UserSignUpRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UserSignUpRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.username = "";
                    object.password = "";
                }
                if (message.username != null && message.hasOwnProperty("username"))
                    object.username = message.username;
                if (message.password != null && message.hasOwnProperty("password"))
                    object.password = message.password;
                return object;
            };

            /**
             * Converts this UserSignUpRequest to JSON.
             * @function toJSON
             * @memberof api.user.UserSignUpRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UserSignUpRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UserSignUpRequest
             * @function getTypeUrl
             * @memberof api.user.UserSignUpRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UserSignUpRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/api.user.UserSignUpRequest";
            };

            return UserSignUpRequest;
        })();

        user.UserLoginRequest = (function() {

            /**
             * Properties of a UserLoginRequest.
             * @memberof api.user
             * @interface IUserLoginRequest
             * @property {string|null} [username] UserLoginRequest username
             * @property {string|null} [password] UserLoginRequest password
             */

            /**
             * Constructs a new UserLoginRequest.
             * @memberof api.user
             * @classdesc Represents a UserLoginRequest.
             * @implements IUserLoginRequest
             * @constructor
             * @param {api.user.IUserLoginRequest=} [properties] Properties to set
             */
            function UserLoginRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UserLoginRequest username.
             * @member {string} username
             * @memberof api.user.UserLoginRequest
             * @instance
             */
            UserLoginRequest.prototype.username = "";

            /**
             * UserLoginRequest password.
             * @member {string} password
             * @memberof api.user.UserLoginRequest
             * @instance
             */
            UserLoginRequest.prototype.password = "";

            /**
             * Creates a new UserLoginRequest instance using the specified properties.
             * @function create
             * @memberof api.user.UserLoginRequest
             * @static
             * @param {api.user.IUserLoginRequest=} [properties] Properties to set
             * @returns {api.user.UserLoginRequest} UserLoginRequest instance
             */
            UserLoginRequest.create = function create(properties) {
                return new UserLoginRequest(properties);
            };

            /**
             * Encodes the specified UserLoginRequest message. Does not implicitly {@link api.user.UserLoginRequest.verify|verify} messages.
             * @function encode
             * @memberof api.user.UserLoginRequest
             * @static
             * @param {api.user.IUserLoginRequest} message UserLoginRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserLoginRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
                if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
                return writer;
            };

            /**
             * Encodes the specified UserLoginRequest message, length delimited. Does not implicitly {@link api.user.UserLoginRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof api.user.UserLoginRequest
             * @static
             * @param {api.user.IUserLoginRequest} message UserLoginRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserLoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UserLoginRequest message from the specified reader or buffer.
             * @function decode
             * @memberof api.user.UserLoginRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {api.user.UserLoginRequest} UserLoginRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserLoginRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.user.UserLoginRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.username = reader.string();
                            break;
                        }
                    case 2: {
                            message.password = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a UserLoginRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof api.user.UserLoginRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {api.user.UserLoginRequest} UserLoginRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserLoginRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UserLoginRequest message.
             * @function verify
             * @memberof api.user.UserLoginRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UserLoginRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.username != null && message.hasOwnProperty("username"))
                    if (!$util.isString(message.username))
                        return "username: string expected";
                if (message.password != null && message.hasOwnProperty("password"))
                    if (!$util.isString(message.password))
                        return "password: string expected";
                return null;
            };

            /**
             * Creates a UserLoginRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof api.user.UserLoginRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {api.user.UserLoginRequest} UserLoginRequest
             */
            UserLoginRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.api.user.UserLoginRequest)
                    return object;
                var message = new $root.api.user.UserLoginRequest();
                if (object.username != null)
                    message.username = String(object.username);
                if (object.password != null)
                    message.password = String(object.password);
                return message;
            };

            /**
             * Creates a plain object from a UserLoginRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof api.user.UserLoginRequest
             * @static
             * @param {api.user.UserLoginRequest} message UserLoginRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UserLoginRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.username = "";
                    object.password = "";
                }
                if (message.username != null && message.hasOwnProperty("username"))
                    object.username = message.username;
                if (message.password != null && message.hasOwnProperty("password"))
                    object.password = message.password;
                return object;
            };

            /**
             * Converts this UserLoginRequest to JSON.
             * @function toJSON
             * @memberof api.user.UserLoginRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UserLoginRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UserLoginRequest
             * @function getTypeUrl
             * @memberof api.user.UserLoginRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UserLoginRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/api.user.UserLoginRequest";
            };

            return UserLoginRequest;
        })();

        user.UserCommonResponse = (function() {

            /**
             * Properties of a UserCommonResponse.
             * @memberof api.user
             * @interface IUserCommonResponse
             * @property {string|null} [username] UserCommonResponse username
             * @property {string|null} [token] UserCommonResponse token
             */

            /**
             * Constructs a new UserCommonResponse.
             * @memberof api.user
             * @classdesc Represents a UserCommonResponse.
             * @implements IUserCommonResponse
             * @constructor
             * @param {api.user.IUserCommonResponse=} [properties] Properties to set
             */
            function UserCommonResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UserCommonResponse username.
             * @member {string} username
             * @memberof api.user.UserCommonResponse
             * @instance
             */
            UserCommonResponse.prototype.username = "";

            /**
             * UserCommonResponse token.
             * @member {string} token
             * @memberof api.user.UserCommonResponse
             * @instance
             */
            UserCommonResponse.prototype.token = "";

            /**
             * Creates a new UserCommonResponse instance using the specified properties.
             * @function create
             * @memberof api.user.UserCommonResponse
             * @static
             * @param {api.user.IUserCommonResponse=} [properties] Properties to set
             * @returns {api.user.UserCommonResponse} UserCommonResponse instance
             */
            UserCommonResponse.create = function create(properties) {
                return new UserCommonResponse(properties);
            };

            /**
             * Encodes the specified UserCommonResponse message. Does not implicitly {@link api.user.UserCommonResponse.verify|verify} messages.
             * @function encode
             * @memberof api.user.UserCommonResponse
             * @static
             * @param {api.user.IUserCommonResponse} message UserCommonResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserCommonResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
                if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
                return writer;
            };

            /**
             * Encodes the specified UserCommonResponse message, length delimited. Does not implicitly {@link api.user.UserCommonResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof api.user.UserCommonResponse
             * @static
             * @param {api.user.IUserCommonResponse} message UserCommonResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserCommonResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UserCommonResponse message from the specified reader or buffer.
             * @function decode
             * @memberof api.user.UserCommonResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {api.user.UserCommonResponse} UserCommonResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserCommonResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.user.UserCommonResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.username = reader.string();
                            break;
                        }
                    case 2: {
                            message.token = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a UserCommonResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof api.user.UserCommonResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {api.user.UserCommonResponse} UserCommonResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserCommonResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UserCommonResponse message.
             * @function verify
             * @memberof api.user.UserCommonResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UserCommonResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.username != null && message.hasOwnProperty("username"))
                    if (!$util.isString(message.username))
                        return "username: string expected";
                if (message.token != null && message.hasOwnProperty("token"))
                    if (!$util.isString(message.token))
                        return "token: string expected";
                return null;
            };

            /**
             * Creates a UserCommonResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof api.user.UserCommonResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {api.user.UserCommonResponse} UserCommonResponse
             */
            UserCommonResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.api.user.UserCommonResponse)
                    return object;
                var message = new $root.api.user.UserCommonResponse();
                if (object.username != null)
                    message.username = String(object.username);
                if (object.token != null)
                    message.token = String(object.token);
                return message;
            };

            /**
             * Creates a plain object from a UserCommonResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof api.user.UserCommonResponse
             * @static
             * @param {api.user.UserCommonResponse} message UserCommonResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UserCommonResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.username = "";
                    object.token = "";
                }
                if (message.username != null && message.hasOwnProperty("username"))
                    object.username = message.username;
                if (message.token != null && message.hasOwnProperty("token"))
                    object.token = message.token;
                return object;
            };

            /**
             * Converts this UserCommonResponse to JSON.
             * @function toJSON
             * @memberof api.user.UserCommonResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UserCommonResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UserCommonResponse
             * @function getTypeUrl
             * @memberof api.user.UserCommonResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UserCommonResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/api.user.UserCommonResponse";
            };

            return UserCommonResponse;
        })();

        return user;
    })();

    return api;
})();

module.exports = $root;
