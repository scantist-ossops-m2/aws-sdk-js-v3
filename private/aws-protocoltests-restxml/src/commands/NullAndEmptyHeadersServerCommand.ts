// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { NullAndEmptyHeadersIO } from "../models/models_0";
import {
  deserializeAws_restXmlNullAndEmptyHeadersServerCommand,
  serializeAws_restXmlNullAndEmptyHeadersServerCommand,
} from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 *
 * The input for {@link NullAndEmptyHeadersServerCommand}.
 */
export interface NullAndEmptyHeadersServerCommandInput extends NullAndEmptyHeadersIO {}
/**
 * @public
 *
 * The output of {@link NullAndEmptyHeadersServerCommand}.
 */
export interface NullAndEmptyHeadersServerCommandOutput extends NullAndEmptyHeadersIO, __MetadataBearer {}

/**
 * @public
 * Null and empty headers are not sent over the wire.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, NullAndEmptyHeadersServerCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, NullAndEmptyHeadersServerCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const command = new NullAndEmptyHeadersServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param NullAndEmptyHeadersServerCommandInput - {@link NullAndEmptyHeadersServerCommandInput}
 * @returns {@link NullAndEmptyHeadersServerCommandOutput}
 * @see {@link NullAndEmptyHeadersServerCommandInput} for command's `input` shape.
 * @see {@link NullAndEmptyHeadersServerCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 *
 */
export class NullAndEmptyHeadersServerCommand extends $Command<
  NullAndEmptyHeadersServerCommandInput,
  NullAndEmptyHeadersServerCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: NullAndEmptyHeadersServerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RestXmlProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<NullAndEmptyHeadersServerCommandInput, NullAndEmptyHeadersServerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "NullAndEmptyHeadersServerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: NullAndEmptyHeadersServerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlNullAndEmptyHeadersServerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<NullAndEmptyHeadersServerCommandOutput> {
    return deserializeAws_restXmlNullAndEmptyHeadersServerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
