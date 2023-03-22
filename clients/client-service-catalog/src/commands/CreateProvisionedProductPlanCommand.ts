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

import { CreateProvisionedProductPlanInput, CreateProvisionedProductPlanOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateProvisionedProductPlanCommand,
  serializeAws_json1_1CreateProvisionedProductPlanCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 *
 * The input for {@link CreateProvisionedProductPlanCommand}.
 */
export interface CreateProvisionedProductPlanCommandInput extends CreateProvisionedProductPlanInput {}
/**
 * @public
 *
 * The output of {@link CreateProvisionedProductPlanCommand}.
 */
export interface CreateProvisionedProductPlanCommandOutput
  extends CreateProvisionedProductPlanOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a plan.</p>
 *          <p>A plan includes the list of resources to be
 *          created (when provisioning a new product) or modified (when updating a provisioned product)
 *          when the plan is executed.</p>
 *          <p>You can create one plan for each provisioned product. To create a plan for an existing
 *          provisioned product, the product status must be AVAILABLE or TAINTED.</p>
 *          <p>To view the resource changes in the change set, use <a>DescribeProvisionedProductPlan</a>.
 *          To create or modify the provisioned product, use <a>ExecuteProvisionedProductPlan</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, CreateProvisionedProductPlanCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, CreateProvisionedProductPlanCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new CreateProvisionedProductPlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateProvisionedProductPlanCommandInput - {@link CreateProvisionedProductPlanCommandInput}
 * @returns {@link CreateProvisionedProductPlanCommandOutput}
 * @see {@link CreateProvisionedProductPlanCommandInput} for command's `input` shape.
 * @see {@link CreateProvisionedProductPlanCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>An attempt was made to modify a resource that is in a state that is not valid.
 *          Check your resources to ensure that they are in valid states before retrying the operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 *
 */
export class CreateProvisionedProductPlanCommand extends $Command<
  CreateProvisionedProductPlanCommandInput,
  CreateProvisionedProductPlanCommandOutput,
  ServiceCatalogClientResolvedConfig
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
  constructor(readonly input: CreateProvisionedProductPlanCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateProvisionedProductPlanCommandInput, CreateProvisionedProductPlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateProvisionedProductPlanCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "CreateProvisionedProductPlanCommand";
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
  private serialize(input: CreateProvisionedProductPlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateProvisionedProductPlanCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateProvisionedProductPlanCommandOutput> {
    return deserializeAws_json1_1CreateProvisionedProductPlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
