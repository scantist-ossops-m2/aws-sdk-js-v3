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

import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { CheckoutBorrowLicenseRequest, CheckoutBorrowLicenseResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CheckoutBorrowLicenseCommand,
  serializeAws_json1_1CheckoutBorrowLicenseCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link CheckoutBorrowLicenseCommand}.
 */
export interface CheckoutBorrowLicenseCommandInput extends CheckoutBorrowLicenseRequest {}
/**
 * @public
 *
 * The output of {@link CheckoutBorrowLicenseCommand}.
 */
export interface CheckoutBorrowLicenseCommandOutput extends CheckoutBorrowLicenseResponse, __MetadataBearer {}

/**
 * @public
 * <p>Checks out the specified license for offline use.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CheckoutBorrowLicenseCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, CheckoutBorrowLicenseCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new CheckoutBorrowLicenseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CheckoutBorrowLicenseCommandInput - {@link CheckoutBorrowLicenseCommandInput}
 * @returns {@link CheckoutBorrowLicenseCommandOutput}
 * @see {@link CheckoutBorrowLicenseCommandInput} for command's `input` shape.
 * @see {@link CheckoutBorrowLicenseCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to resource denied.</p>
 *
 * @throws {@link AuthorizationException} (client fault)
 *  <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *          policy associated with this account.</p>
 *
 * @throws {@link EntitlementNotAllowedException} (client fault)
 *  <p>The entitlement is not allowed.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link NoEntitlementsAllowedException} (client fault)
 *  <p>There are no entitlements found for this license, or the entitlement maximum count is reached.</p>
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *  <p>Too many requests have been submitted. Try again after a brief wait.</p>
 *
 * @throws {@link RedirectException} (client fault)
 *  <p>This is not the correct Region for the resource. Try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource cannot be found.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link UnsupportedDigitalSignatureMethodException} (client fault)
 *  <p>The digital signature method is unsupported. Try your request again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The provided input is not valid. Try your request again.</p>
 *
 *
 */
export class CheckoutBorrowLicenseCommand extends $Command<
  CheckoutBorrowLicenseCommandInput,
  CheckoutBorrowLicenseCommandOutput,
  LicenseManagerClientResolvedConfig
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
  constructor(readonly input: CheckoutBorrowLicenseCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LicenseManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CheckoutBorrowLicenseCommandInput, CheckoutBorrowLicenseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CheckoutBorrowLicenseCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "CheckoutBorrowLicenseCommand";
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
  private serialize(input: CheckoutBorrowLicenseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CheckoutBorrowLicenseCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CheckoutBorrowLicenseCommandOutput> {
    return deserializeAws_json1_1CheckoutBorrowLicenseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
