// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { EnableVgwRoutePropagationRequest } from "../models/models_5";
import {
  deserializeAws_ec2EnableVgwRoutePropagationCommand,
  serializeAws_ec2EnableVgwRoutePropagationCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link EnableVgwRoutePropagationCommand}.
 */
export interface EnableVgwRoutePropagationCommandInput extends EnableVgwRoutePropagationRequest {}
/**
 * @public
 *
 * The output of {@link EnableVgwRoutePropagationCommand}.
 */
export interface EnableVgwRoutePropagationCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Enables a virtual private gateway (VGW) to propagate routes to the specified route
 *             table of a VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableVgwRoutePropagationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableVgwRoutePropagationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new EnableVgwRoutePropagationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param EnableVgwRoutePropagationCommandInput - {@link EnableVgwRoutePropagationCommandInput}
 * @returns {@link EnableVgwRoutePropagationCommandOutput}
 * @see {@link EnableVgwRoutePropagationCommandInput} for command's `input` shape.
 * @see {@link EnableVgwRoutePropagationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 * @example To enable route propagation
 * ```javascript
 * // This example enables the specified virtual private gateway to propagate static routes to the specified route table.
 * const input = {
 *   "GatewayId": "vgw-9a4cacf3",
 *   "RouteTableId": "rtb-22574640"
 * };
 * const command = new EnableVgwRoutePropagationCommand(input);
 * await client.send(command);
 * // example id: ec2-enable-vgw-route-propagation-1
 * ```
 *
 */
export class EnableVgwRoutePropagationCommand extends $Command<
  EnableVgwRoutePropagationCommandInput,
  EnableVgwRoutePropagationCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: EnableVgwRoutePropagationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EnableVgwRoutePropagationCommandInput, EnableVgwRoutePropagationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EnableVgwRoutePropagationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "EnableVgwRoutePropagationCommand";
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
  private serialize(input: EnableVgwRoutePropagationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2EnableVgwRoutePropagationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableVgwRoutePropagationCommandOutput> {
    return deserializeAws_ec2EnableVgwRoutePropagationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
