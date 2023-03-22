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

import { GetMobileDeviceAccessEffectRequest, GetMobileDeviceAccessEffectResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetMobileDeviceAccessEffectCommand,
  serializeAws_json1_1GetMobileDeviceAccessEffectCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 *
 * The input for {@link GetMobileDeviceAccessEffectCommand}.
 */
export interface GetMobileDeviceAccessEffectCommandInput extends GetMobileDeviceAccessEffectRequest {}
/**
 * @public
 *
 * The output of {@link GetMobileDeviceAccessEffectCommand}.
 */
export interface GetMobileDeviceAccessEffectCommandOutput
  extends GetMobileDeviceAccessEffectResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Simulates the effect of the mobile device access rules for the given attributes of a sample access event. Use this method to test the effects of the current set of mobile device access
 *          rules for the WorkMail organization for a particular user's attributes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, GetMobileDeviceAccessEffectCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, GetMobileDeviceAccessEffectCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new GetMobileDeviceAccessEffectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetMobileDeviceAccessEffectCommandInput - {@link GetMobileDeviceAccessEffectCommandInput}
 * @returns {@link GetMobileDeviceAccessEffectCommandOutput}
 * @see {@link GetMobileDeviceAccessEffectCommandInput} for command's `input` shape.
 * @see {@link GetMobileDeviceAccessEffectCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 *
 */
export class GetMobileDeviceAccessEffectCommand extends $Command<
  GetMobileDeviceAccessEffectCommandInput,
  GetMobileDeviceAccessEffectCommandOutput,
  WorkMailClientResolvedConfig
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
  constructor(readonly input: GetMobileDeviceAccessEffectCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMobileDeviceAccessEffectCommandInput, GetMobileDeviceAccessEffectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMobileDeviceAccessEffectCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "GetMobileDeviceAccessEffectCommand";
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
  private serialize(input: GetMobileDeviceAccessEffectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetMobileDeviceAccessEffectCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetMobileDeviceAccessEffectCommandOutput> {
    return deserializeAws_json1_1GetMobileDeviceAccessEffectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
