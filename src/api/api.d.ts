import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace api. */
export namespace api {

    /** Namespace chitchat. */
    namespace chitchat {

        /** Properties of a CreateChatRequest. */
        interface ICreateChatRequest {

            /** CreateChatRequest name */
            name?: (string|null);

            /** CreateChatRequest type */
            type?: (string|null);

            /** CreateChatRequest token */
            token?: (string|null);
        }

        /** Represents a CreateChatRequest. */
        class CreateChatRequest implements ICreateChatRequest {

            /**
             * Constructs a new CreateChatRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: api.chitchat.ICreateChatRequest);

            /** CreateChatRequest name. */
            public name: string;

            /** CreateChatRequest type. */
            public type: string;

            /** CreateChatRequest token. */
            public token: string;

            /**
             * Creates a new CreateChatRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateChatRequest instance
             */
            public static create(properties?: api.chitchat.ICreateChatRequest): api.chitchat.CreateChatRequest;

            /**
             * Encodes the specified CreateChatRequest message. Does not implicitly {@link api.chitchat.CreateChatRequest.verify|verify} messages.
             * @param message CreateChatRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: api.chitchat.ICreateChatRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateChatRequest message, length delimited. Does not implicitly {@link api.chitchat.CreateChatRequest.verify|verify} messages.
             * @param message CreateChatRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: api.chitchat.ICreateChatRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateChatRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateChatRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.chitchat.CreateChatRequest;

            /**
             * Decodes a CreateChatRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateChatRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.chitchat.CreateChatRequest;

            /**
             * Verifies a CreateChatRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateChatRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateChatRequest
             */
            public static fromObject(object: { [k: string]: any }): api.chitchat.CreateChatRequest;

            /**
             * Creates a plain object from a CreateChatRequest message. Also converts values to other types if specified.
             * @param message CreateChatRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: api.chitchat.CreateChatRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateChatRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CreateChatRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an UpdateChatRequest. */
        interface IUpdateChatRequest {

            /** UpdateChatRequest id */
            id?: (string|null);

            /** UpdateChatRequest name */
            name?: (string|null);

            /** UpdateChatRequest token */
            token?: (string|null);
        }

        /** Represents an UpdateChatRequest. */
        class UpdateChatRequest implements IUpdateChatRequest {

            /**
             * Constructs a new UpdateChatRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: api.chitchat.IUpdateChatRequest);

            /** UpdateChatRequest id. */
            public id: string;

            /** UpdateChatRequest name. */
            public name: string;

            /** UpdateChatRequest token. */
            public token: string;

            /**
             * Creates a new UpdateChatRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateChatRequest instance
             */
            public static create(properties?: api.chitchat.IUpdateChatRequest): api.chitchat.UpdateChatRequest;

            /**
             * Encodes the specified UpdateChatRequest message. Does not implicitly {@link api.chitchat.UpdateChatRequest.verify|verify} messages.
             * @param message UpdateChatRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: api.chitchat.IUpdateChatRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateChatRequest message, length delimited. Does not implicitly {@link api.chitchat.UpdateChatRequest.verify|verify} messages.
             * @param message UpdateChatRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: api.chitchat.IUpdateChatRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateChatRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateChatRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.chitchat.UpdateChatRequest;

            /**
             * Decodes an UpdateChatRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateChatRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.chitchat.UpdateChatRequest;

            /**
             * Verifies an UpdateChatRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateChatRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateChatRequest
             */
            public static fromObject(object: { [k: string]: any }): api.chitchat.UpdateChatRequest;

            /**
             * Creates a plain object from an UpdateChatRequest message. Also converts values to other types if specified.
             * @param message UpdateChatRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: api.chitchat.UpdateChatRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateChatRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UpdateChatRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DeleteChatRequest. */
        interface IDeleteChatRequest {

            /** DeleteChatRequest id */
            id?: (string|null);

            /** DeleteChatRequest token */
            token?: (string|null);
        }

        /** Represents a DeleteChatRequest. */
        class DeleteChatRequest implements IDeleteChatRequest {

            /**
             * Constructs a new DeleteChatRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: api.chitchat.IDeleteChatRequest);

            /** DeleteChatRequest id. */
            public id: string;

            /** DeleteChatRequest token. */
            public token: string;

            /**
             * Creates a new DeleteChatRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteChatRequest instance
             */
            public static create(properties?: api.chitchat.IDeleteChatRequest): api.chitchat.DeleteChatRequest;

            /**
             * Encodes the specified DeleteChatRequest message. Does not implicitly {@link api.chitchat.DeleteChatRequest.verify|verify} messages.
             * @param message DeleteChatRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: api.chitchat.IDeleteChatRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteChatRequest message, length delimited. Does not implicitly {@link api.chitchat.DeleteChatRequest.verify|verify} messages.
             * @param message DeleteChatRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: api.chitchat.IDeleteChatRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteChatRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeleteChatRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.chitchat.DeleteChatRequest;

            /**
             * Decodes a DeleteChatRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteChatRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.chitchat.DeleteChatRequest;

            /**
             * Verifies a DeleteChatRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeleteChatRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeleteChatRequest
             */
            public static fromObject(object: { [k: string]: any }): api.chitchat.DeleteChatRequest;

            /**
             * Creates a plain object from a DeleteChatRequest message. Also converts values to other types if specified.
             * @param message DeleteChatRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: api.chitchat.DeleteChatRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteChatRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DeleteChatRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ListChatRequest. */
        interface IListChatRequest {

            /** ListChatRequest token */
            token?: (string|null);

            /** ListChatRequest lastCreateTime */
            lastCreateTime?: (number|Long|null);
        }

        /** Represents a ListChatRequest. */
        class ListChatRequest implements IListChatRequest {

            /**
             * Constructs a new ListChatRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: api.chitchat.IListChatRequest);

            /** ListChatRequest token. */
            public token: string;

            /** ListChatRequest lastCreateTime. */
            public lastCreateTime: (number|Long);

            /**
             * Creates a new ListChatRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListChatRequest instance
             */
            public static create(properties?: api.chitchat.IListChatRequest): api.chitchat.ListChatRequest;

            /**
             * Encodes the specified ListChatRequest message. Does not implicitly {@link api.chitchat.ListChatRequest.verify|verify} messages.
             * @param message ListChatRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: api.chitchat.IListChatRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListChatRequest message, length delimited. Does not implicitly {@link api.chitchat.ListChatRequest.verify|verify} messages.
             * @param message ListChatRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: api.chitchat.IListChatRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListChatRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListChatRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.chitchat.ListChatRequest;

            /**
             * Decodes a ListChatRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListChatRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.chitchat.ListChatRequest;

            /**
             * Verifies a ListChatRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListChatRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListChatRequest
             */
            public static fromObject(object: { [k: string]: any }): api.chitchat.ListChatRequest;

            /**
             * Creates a plain object from a ListChatRequest message. Also converts values to other types if specified.
             * @param message ListChatRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: api.chitchat.ListChatRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListChatRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ListChatRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ChatCommonResponse. */
        interface IChatCommonResponse {

            /** ChatCommonResponse role */
            role?: (string|null);

            /** ChatCommonResponse content */
            content?: (string|null);
        }

        /** Represents a ChatCommonResponse. */
        class ChatCommonResponse implements IChatCommonResponse {

            /**
             * Constructs a new ChatCommonResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: api.chitchat.IChatCommonResponse);

            /** ChatCommonResponse role. */
            public role: string;

            /** ChatCommonResponse content. */
            public content: string;

            /**
             * Creates a new ChatCommonResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ChatCommonResponse instance
             */
            public static create(properties?: api.chitchat.IChatCommonResponse): api.chitchat.ChatCommonResponse;

            /**
             * Encodes the specified ChatCommonResponse message. Does not implicitly {@link api.chitchat.ChatCommonResponse.verify|verify} messages.
             * @param message ChatCommonResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: api.chitchat.IChatCommonResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ChatCommonResponse message, length delimited. Does not implicitly {@link api.chitchat.ChatCommonResponse.verify|verify} messages.
             * @param message ChatCommonResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: api.chitchat.IChatCommonResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ChatCommonResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ChatCommonResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.chitchat.ChatCommonResponse;

            /**
             * Decodes a ChatCommonResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ChatCommonResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.chitchat.ChatCommonResponse;

            /**
             * Verifies a ChatCommonResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ChatCommonResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ChatCommonResponse
             */
            public static fromObject(object: { [k: string]: any }): api.chitchat.ChatCommonResponse;

            /**
             * Creates a plain object from a ChatCommonResponse message. Also converts values to other types if specified.
             * @param message ChatCommonResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: api.chitchat.ChatCommonResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ChatCommonResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ChatCommonResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ListChatResponse. */
        interface IListChatResponse {

            /** ListChatResponse chats */
            chats?: (api.chitchat.IChatCommonResponse[]|null);
        }

        /** Represents a ListChatResponse. */
        class ListChatResponse implements IListChatResponse {

            /**
             * Constructs a new ListChatResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: api.chitchat.IListChatResponse);

            /** ListChatResponse chats. */
            public chats: api.chitchat.IChatCommonResponse[];

            /**
             * Creates a new ListChatResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListChatResponse instance
             */
            public static create(properties?: api.chitchat.IListChatResponse): api.chitchat.ListChatResponse;

            /**
             * Encodes the specified ListChatResponse message. Does not implicitly {@link api.chitchat.ListChatResponse.verify|verify} messages.
             * @param message ListChatResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: api.chitchat.IListChatResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListChatResponse message, length delimited. Does not implicitly {@link api.chitchat.ListChatResponse.verify|verify} messages.
             * @param message ListChatResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: api.chitchat.IListChatResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListChatResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListChatResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.chitchat.ListChatResponse;

            /**
             * Decodes a ListChatResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListChatResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.chitchat.ListChatResponse;

            /**
             * Verifies a ListChatResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListChatResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListChatResponse
             */
            public static fromObject(object: { [k: string]: any }): api.chitchat.ListChatResponse;

            /**
             * Creates a plain object from a ListChatResponse message. Also converts values to other types if specified.
             * @param message ListChatResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: api.chitchat.ListChatResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListChatResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ListChatResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CreateMessageRequest. */
        interface ICreateMessageRequest {

            /** CreateMessageRequest role */
            role?: (string|null);

            /** CreateMessageRequest content */
            content?: (string|null);
        }

        /** Represents a CreateMessageRequest. */
        class CreateMessageRequest implements ICreateMessageRequest {

            /**
             * Constructs a new CreateMessageRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: api.chitchat.ICreateMessageRequest);

            /** CreateMessageRequest role. */
            public role: string;

            /** CreateMessageRequest content. */
            public content: string;

            /**
             * Creates a new CreateMessageRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateMessageRequest instance
             */
            public static create(properties?: api.chitchat.ICreateMessageRequest): api.chitchat.CreateMessageRequest;

            /**
             * Encodes the specified CreateMessageRequest message. Does not implicitly {@link api.chitchat.CreateMessageRequest.verify|verify} messages.
             * @param message CreateMessageRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: api.chitchat.ICreateMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateMessageRequest message, length delimited. Does not implicitly {@link api.chitchat.CreateMessageRequest.verify|verify} messages.
             * @param message CreateMessageRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: api.chitchat.ICreateMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateMessageRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateMessageRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.chitchat.CreateMessageRequest;

            /**
             * Decodes a CreateMessageRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateMessageRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.chitchat.CreateMessageRequest;

            /**
             * Verifies a CreateMessageRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateMessageRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateMessageRequest
             */
            public static fromObject(object: { [k: string]: any }): api.chitchat.CreateMessageRequest;

            /**
             * Creates a plain object from a CreateMessageRequest message. Also converts values to other types if specified.
             * @param message CreateMessageRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: api.chitchat.CreateMessageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateMessageRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CreateMessageRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CreateMessageResponse. */
        interface ICreateMessageResponse {

            /** CreateMessageResponse role */
            role?: (string|null);

            /** CreateMessageResponse content */
            content?: (string|null);

            /** CreateMessageResponse isStart */
            isStart?: (boolean|null);

            /** CreateMessageResponse isContinue */
            isContinue?: (boolean|null);

            /** CreateMessageResponse isFinished */
            isFinished?: (boolean|null);
        }

        /** Represents a CreateMessageResponse. */
        class CreateMessageResponse implements ICreateMessageResponse {

            /**
             * Constructs a new CreateMessageResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: api.chitchat.ICreateMessageResponse);

            /** CreateMessageResponse role. */
            public role: string;

            /** CreateMessageResponse content. */
            public content: string;

            /** CreateMessageResponse isStart. */
            public isStart: boolean;

            /** CreateMessageResponse isContinue. */
            public isContinue: boolean;

            /** CreateMessageResponse isFinished. */
            public isFinished: boolean;

            /**
             * Creates a new CreateMessageResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateMessageResponse instance
             */
            public static create(properties?: api.chitchat.ICreateMessageResponse): api.chitchat.CreateMessageResponse;

            /**
             * Encodes the specified CreateMessageResponse message. Does not implicitly {@link api.chitchat.CreateMessageResponse.verify|verify} messages.
             * @param message CreateMessageResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: api.chitchat.ICreateMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateMessageResponse message, length delimited. Does not implicitly {@link api.chitchat.CreateMessageResponse.verify|verify} messages.
             * @param message CreateMessageResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: api.chitchat.ICreateMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateMessageResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateMessageResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.chitchat.CreateMessageResponse;

            /**
             * Decodes a CreateMessageResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateMessageResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.chitchat.CreateMessageResponse;

            /**
             * Verifies a CreateMessageResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateMessageResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateMessageResponse
             */
            public static fromObject(object: { [k: string]: any }): api.chitchat.CreateMessageResponse;

            /**
             * Creates a plain object from a CreateMessageResponse message. Also converts values to other types if specified.
             * @param message CreateMessageResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: api.chitchat.CreateMessageResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateMessageResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CreateMessageResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace common. */
    namespace common {

        /** Properties of a CommonResponse. */
        interface ICommonResponse {
        }

        /** Represents a CommonResponse. */
        class CommonResponse implements ICommonResponse {

            /**
             * Constructs a new CommonResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: api.common.ICommonResponse);

            /**
             * Creates a new CommonResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CommonResponse instance
             */
            public static create(properties?: api.common.ICommonResponse): api.common.CommonResponse;

            /**
             * Encodes the specified CommonResponse message. Does not implicitly {@link api.common.CommonResponse.verify|verify} messages.
             * @param message CommonResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: api.common.ICommonResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CommonResponse message, length delimited. Does not implicitly {@link api.common.CommonResponse.verify|verify} messages.
             * @param message CommonResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: api.common.ICommonResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CommonResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CommonResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.common.CommonResponse;

            /**
             * Decodes a CommonResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CommonResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.common.CommonResponse;

            /**
             * Verifies a CommonResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CommonResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CommonResponse
             */
            public static fromObject(object: { [k: string]: any }): api.common.CommonResponse;

            /**
             * Creates a plain object from a CommonResponse message. Also converts values to other types if specified.
             * @param message CommonResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: api.common.CommonResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CommonResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CommonResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PopupErrorResponse. */
        interface IPopupErrorResponse {

            /** PopupErrorResponse id */
            id?: (string|null);

            /** PopupErrorResponse error */
            error?: (string|null);
        }

        /** Represents a PopupErrorResponse. */
        class PopupErrorResponse implements IPopupErrorResponse {

            /**
             * Constructs a new PopupErrorResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: api.common.IPopupErrorResponse);

            /** PopupErrorResponse id. */
            public id: string;

            /** PopupErrorResponse error. */
            public error: string;

            /**
             * Creates a new PopupErrorResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PopupErrorResponse instance
             */
            public static create(properties?: api.common.IPopupErrorResponse): api.common.PopupErrorResponse;

            /**
             * Encodes the specified PopupErrorResponse message. Does not implicitly {@link api.common.PopupErrorResponse.verify|verify} messages.
             * @param message PopupErrorResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: api.common.IPopupErrorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PopupErrorResponse message, length delimited. Does not implicitly {@link api.common.PopupErrorResponse.verify|verify} messages.
             * @param message PopupErrorResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: api.common.IPopupErrorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PopupErrorResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PopupErrorResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.common.PopupErrorResponse;

            /**
             * Decodes a PopupErrorResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PopupErrorResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.common.PopupErrorResponse;

            /**
             * Verifies a PopupErrorResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PopupErrorResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PopupErrorResponse
             */
            public static fromObject(object: { [k: string]: any }): api.common.PopupErrorResponse;

            /**
             * Creates a plain object from a PopupErrorResponse message. Also converts values to other types if specified.
             * @param message PopupErrorResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: api.common.PopupErrorResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PopupErrorResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PopupErrorResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PingRequest. */
        interface IPingRequest {
        }

        /** Represents a PingRequest. */
        class PingRequest implements IPingRequest {

            /**
             * Constructs a new PingRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: api.common.IPingRequest);

            /**
             * Creates a new PingRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PingRequest instance
             */
            public static create(properties?: api.common.IPingRequest): api.common.PingRequest;

            /**
             * Encodes the specified PingRequest message. Does not implicitly {@link api.common.PingRequest.verify|verify} messages.
             * @param message PingRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: api.common.IPingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PingRequest message, length delimited. Does not implicitly {@link api.common.PingRequest.verify|verify} messages.
             * @param message PingRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: api.common.IPingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PingRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.common.PingRequest;

            /**
             * Decodes a PingRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.common.PingRequest;

            /**
             * Verifies a PingRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PingRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PingRequest
             */
            public static fromObject(object: { [k: string]: any }): api.common.PingRequest;

            /**
             * Creates a plain object from a PingRequest message. Also converts values to other types if specified.
             * @param message PingRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: api.common.PingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PingRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PingRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PingResponse. */
        interface IPingResponse {
        }

        /** Represents a PingResponse. */
        class PingResponse implements IPingResponse {

            /**
             * Constructs a new PingResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: api.common.IPingResponse);

            /**
             * Creates a new PingResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PingResponse instance
             */
            public static create(properties?: api.common.IPingResponse): api.common.PingResponse;

            /**
             * Encodes the specified PingResponse message. Does not implicitly {@link api.common.PingResponse.verify|verify} messages.
             * @param message PingResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: api.common.IPingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PingResponse message, length delimited. Does not implicitly {@link api.common.PingResponse.verify|verify} messages.
             * @param message PingResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: api.common.IPingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PingResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PingResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.common.PingResponse;

            /**
             * Decodes a PingResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PingResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.common.PingResponse;

            /**
             * Verifies a PingResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PingResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PingResponse
             */
            public static fromObject(object: { [k: string]: any }): api.common.PingResponse;

            /**
             * Creates a plain object from a PingResponse message. Also converts values to other types if specified.
             * @param message PingResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: api.common.PingResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PingResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PingResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace user. */
    namespace user {

        /** Properties of a UserSignUpRequest. */
        interface IUserSignUpRequest {

            /** UserSignUpRequest username */
            username?: (string|null);

            /** UserSignUpRequest password */
            password?: (string|null);
        }

        /** Represents a UserSignUpRequest. */
        class UserSignUpRequest implements IUserSignUpRequest {

            /**
             * Constructs a new UserSignUpRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: api.user.IUserSignUpRequest);

            /** UserSignUpRequest username. */
            public username: string;

            /** UserSignUpRequest password. */
            public password: string;

            /**
             * Creates a new UserSignUpRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserSignUpRequest instance
             */
            public static create(properties?: api.user.IUserSignUpRequest): api.user.UserSignUpRequest;

            /**
             * Encodes the specified UserSignUpRequest message. Does not implicitly {@link api.user.UserSignUpRequest.verify|verify} messages.
             * @param message UserSignUpRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: api.user.IUserSignUpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserSignUpRequest message, length delimited. Does not implicitly {@link api.user.UserSignUpRequest.verify|verify} messages.
             * @param message UserSignUpRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: api.user.IUserSignUpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserSignUpRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserSignUpRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.user.UserSignUpRequest;

            /**
             * Decodes a UserSignUpRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UserSignUpRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.user.UserSignUpRequest;

            /**
             * Verifies a UserSignUpRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserSignUpRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserSignUpRequest
             */
            public static fromObject(object: { [k: string]: any }): api.user.UserSignUpRequest;

            /**
             * Creates a plain object from a UserSignUpRequest message. Also converts values to other types if specified.
             * @param message UserSignUpRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: api.user.UserSignUpRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserSignUpRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UserSignUpRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UserLoginRequest. */
        interface IUserLoginRequest {

            /** UserLoginRequest username */
            username?: (string|null);

            /** UserLoginRequest password */
            password?: (string|null);
        }

        /** Represents a UserLoginRequest. */
        class UserLoginRequest implements IUserLoginRequest {

            /**
             * Constructs a new UserLoginRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: api.user.IUserLoginRequest);

            /** UserLoginRequest username. */
            public username: string;

            /** UserLoginRequest password. */
            public password: string;

            /**
             * Creates a new UserLoginRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserLoginRequest instance
             */
            public static create(properties?: api.user.IUserLoginRequest): api.user.UserLoginRequest;

            /**
             * Encodes the specified UserLoginRequest message. Does not implicitly {@link api.user.UserLoginRequest.verify|verify} messages.
             * @param message UserLoginRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: api.user.IUserLoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserLoginRequest message, length delimited. Does not implicitly {@link api.user.UserLoginRequest.verify|verify} messages.
             * @param message UserLoginRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: api.user.IUserLoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserLoginRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserLoginRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.user.UserLoginRequest;

            /**
             * Decodes a UserLoginRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UserLoginRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.user.UserLoginRequest;

            /**
             * Verifies a UserLoginRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserLoginRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserLoginRequest
             */
            public static fromObject(object: { [k: string]: any }): api.user.UserLoginRequest;

            /**
             * Creates a plain object from a UserLoginRequest message. Also converts values to other types if specified.
             * @param message UserLoginRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: api.user.UserLoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserLoginRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UserLoginRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UserCommonResponse. */
        interface IUserCommonResponse {

            /** UserCommonResponse username */
            username?: (string|null);

            /** UserCommonResponse token */
            token?: (string|null);
        }

        /** Represents a UserCommonResponse. */
        class UserCommonResponse implements IUserCommonResponse {

            /**
             * Constructs a new UserCommonResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: api.user.IUserCommonResponse);

            /** UserCommonResponse username. */
            public username: string;

            /** UserCommonResponse token. */
            public token: string;

            /**
             * Creates a new UserCommonResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserCommonResponse instance
             */
            public static create(properties?: api.user.IUserCommonResponse): api.user.UserCommonResponse;

            /**
             * Encodes the specified UserCommonResponse message. Does not implicitly {@link api.user.UserCommonResponse.verify|verify} messages.
             * @param message UserCommonResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: api.user.IUserCommonResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserCommonResponse message, length delimited. Does not implicitly {@link api.user.UserCommonResponse.verify|verify} messages.
             * @param message UserCommonResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: api.user.IUserCommonResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserCommonResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserCommonResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.user.UserCommonResponse;

            /**
             * Decodes a UserCommonResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UserCommonResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.user.UserCommonResponse;

            /**
             * Verifies a UserCommonResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserCommonResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserCommonResponse
             */
            public static fromObject(object: { [k: string]: any }): api.user.UserCommonResponse;

            /**
             * Creates a plain object from a UserCommonResponse message. Also converts values to other types if specified.
             * @param message UserCommonResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: api.user.UserCommonResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserCommonResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UserCommonResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
