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

import { DescribeSubscribedWorkteamRequest, DescribeSubscribedWorkteamResponse } from "../models/models_2";
import {
  deserializeAws_json1_1DescribeSubscribedWorkteamCommand,
  serializeAws_json1_1DescribeSubscribedWorkteamCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 *
 * The input for {@link DescribeSubscribedWorkteamCommand}.
 */
export interface DescribeSubscribedWorkteamCommandInput extends DescribeSubscribedWorkteamRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSubscribedWorkteamCommand}.
 */
export interface DescribeSubscribedWorkteamCommandOutput extends DescribeSubscribedWorkteamResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a work team provided by a vendor. It returns details about the
 *             subscription with a vendor in the Amazon Web Services Marketplace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeSubscribedWorkteamCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeSubscribedWorkteamCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeSubscribedWorkteamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeSubscribedWorkteamCommandInput - {@link DescribeSubscribedWorkteamCommandInput}
 * @returns {@link DescribeSubscribedWorkteamCommandOutput}
 * @see {@link DescribeSubscribedWorkteamCommandInput} for command's `input` shape.
 * @see {@link DescribeSubscribedWorkteamCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 *
 */
export class DescribeSubscribedWorkteamCommand extends $Command<
  DescribeSubscribedWorkteamCommandInput,
  DescribeSubscribedWorkteamCommandOutput,
  SageMakerClientResolvedConfig
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
  constructor(readonly input: DescribeSubscribedWorkteamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSubscribedWorkteamCommandInput, DescribeSubscribedWorkteamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSubscribedWorkteamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeSubscribedWorkteamCommand";
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
  private serialize(input: DescribeSubscribedWorkteamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeSubscribedWorkteamCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSubscribedWorkteamCommandOutput> {
    return deserializeAws_json1_1DescribeSubscribedWorkteamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
