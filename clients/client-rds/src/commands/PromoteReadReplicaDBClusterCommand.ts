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

import { PromoteReadReplicaDBClusterMessage, PromoteReadReplicaDBClusterResult } from "../models/models_1";
import {
  deserializeAws_queryPromoteReadReplicaDBClusterCommand,
  serializeAws_queryPromoteReadReplicaDBClusterCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 *
 * The input for {@link PromoteReadReplicaDBClusterCommand}.
 */
export interface PromoteReadReplicaDBClusterCommandInput extends PromoteReadReplicaDBClusterMessage {}
/**
 * @public
 *
 * The output of {@link PromoteReadReplicaDBClusterCommand}.
 */
export interface PromoteReadReplicaDBClusterCommandOutput extends PromoteReadReplicaDBClusterResult, __MetadataBearer {}

/**
 * @public
 * <p>Promotes a read replica DB cluster to a standalone DB cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, PromoteReadReplicaDBClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, PromoteReadReplicaDBClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new PromoteReadReplicaDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param PromoteReadReplicaDBClusterCommandInput - {@link PromoteReadReplicaDBClusterCommandInput}
 * @returns {@link PromoteReadReplicaDBClusterCommandOutput}
 * @see {@link PromoteReadReplicaDBClusterCommandInput} for command's `input` shape.
 * @see {@link PromoteReadReplicaDBClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 *
 */
export class PromoteReadReplicaDBClusterCommand extends $Command<
  PromoteReadReplicaDBClusterCommandInput,
  PromoteReadReplicaDBClusterCommandOutput,
  RDSClientResolvedConfig
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
  constructor(readonly input: PromoteReadReplicaDBClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PromoteReadReplicaDBClusterCommandInput, PromoteReadReplicaDBClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PromoteReadReplicaDBClusterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "PromoteReadReplicaDBClusterCommand";
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
  private serialize(input: PromoteReadReplicaDBClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryPromoteReadReplicaDBClusterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PromoteReadReplicaDBClusterCommandOutput> {
    return deserializeAws_queryPromoteReadReplicaDBClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
