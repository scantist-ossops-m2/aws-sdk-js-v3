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

import { MalformedTimestampBodyDefaultInput } from "../models/models_0";
import {
  deserializeAws_restJson1MalformedTimestampBodyDefaultCommand,
  serializeAws_restJson1MalformedTimestampBodyDefaultCommand,
} from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 *
 * The input for {@link MalformedTimestampBodyDefaultCommand}.
 */
export interface MalformedTimestampBodyDefaultCommandInput extends MalformedTimestampBodyDefaultInput {}
/**
 * @public
 *
 * The output of {@link MalformedTimestampBodyDefaultCommand}.
 */
export interface MalformedTimestampBodyDefaultCommandOutput extends __MetadataBearer {}

export class MalformedTimestampBodyDefaultCommand extends $Command<
  MalformedTimestampBodyDefaultCommandInput,
  MalformedTimestampBodyDefaultCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: MalformedTimestampBodyDefaultCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RestJsonProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<MalformedTimestampBodyDefaultCommandInput, MalformedTimestampBodyDefaultCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "MalformedTimestampBodyDefaultCommand";
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
  private serialize(input: MalformedTimestampBodyDefaultCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1MalformedTimestampBodyDefaultCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<MalformedTimestampBodyDefaultCommandOutput> {
    return deserializeAws_restJson1MalformedTimestampBodyDefaultCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
