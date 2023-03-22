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

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { UpdateStackSetInput, UpdateStackSetOutput } from "../models/models_0";
import {
  deserializeAws_queryUpdateStackSetCommand,
  serializeAws_queryUpdateStackSetCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link UpdateStackSetCommand}.
 */
export interface UpdateStackSetCommandInput extends UpdateStackSetInput {}
/**
 * @public
 *
 * The output of {@link UpdateStackSetCommand}.
 */
export interface UpdateStackSetCommandOutput extends UpdateStackSetOutput, __MetadataBearer {}

/**
 * @public
 * <p>Updates the stack set, and associated stack instances in the specified accounts and
 *             Amazon Web Services Regions.</p>
 *          <p>Even if the stack set operation created by updating the stack set fails (completely or
 *          partially, below or above a specified failure tolerance), the stack set is updated with
 *          your changes. Subsequent <a>CreateStackInstances</a> calls on the specified
 *          stack set use the updated stack set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, UpdateStackSetCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, UpdateStackSetCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new UpdateStackSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateStackSetCommandInput - {@link UpdateStackSetCommandInput}
 * @returns {@link UpdateStackSetCommandOutput}
 * @see {@link UpdateStackSetCommandInput} for command's `input` shape.
 * @see {@link UpdateStackSetCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The specified operation isn't valid.</p>
 *
 * @throws {@link OperationIdAlreadyExistsException} (client fault)
 *  <p>The specified operation ID already exists.</p>
 *
 * @throws {@link OperationInProgressException} (client fault)
 *  <p>Another operation is currently in progress for this stack set. Only one operation can be
 *          performed for a stack set at a given time.</p>
 *
 * @throws {@link StackInstanceNotFoundException} (client fault)
 *  <p>The specified stack instance doesn't exist.</p>
 *
 * @throws {@link StackSetNotFoundException} (client fault)
 *  <p>The specified stack set doesn't exist.</p>
 *
 * @throws {@link StaleRequestException} (client fault)
 *  <p>Another operation has been performed on this stack set since the specified operation was
 *          performed.</p>
 *
 *
 */
export class UpdateStackSetCommand extends $Command<
  UpdateStackSetCommandInput,
  UpdateStackSetCommandOutput,
  CloudFormationClientResolvedConfig
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
  constructor(readonly input: UpdateStackSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateStackSetCommandInput, UpdateStackSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateStackSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "UpdateStackSetCommand";
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
  private serialize(input: UpdateStackSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUpdateStackSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateStackSetCommandOutput> {
    return deserializeAws_queryUpdateStackSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
