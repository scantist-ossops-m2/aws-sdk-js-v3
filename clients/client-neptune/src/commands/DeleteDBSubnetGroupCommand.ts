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

import { DeleteDBSubnetGroupMessage } from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import {
  deserializeAws_queryDeleteDBSubnetGroupCommand,
  serializeAws_queryDeleteDBSubnetGroupCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link DeleteDBSubnetGroupCommand}.
 */
export interface DeleteDBSubnetGroupCommandInput extends DeleteDBSubnetGroupMessage {}
/**
 * @public
 *
 * The output of {@link DeleteDBSubnetGroupCommand}.
 */
export interface DeleteDBSubnetGroupCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes a DB subnet group.</p>
 *          <note>
 *             <p>The specified database subnet group must not be associated with any DB instances.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DeleteDBSubnetGroupCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DeleteDBSubnetGroupCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new DeleteDBSubnetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeleteDBSubnetGroupCommandInput - {@link DeleteDBSubnetGroupCommandInput}
 * @returns {@link DeleteDBSubnetGroupCommandOutput}
 * @see {@link DeleteDBSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteDBSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBSubnetGroupNotFoundFault} (client fault)
 *  <p>
 *             <i>DBSubnetGroupName</i> does not refer to an
 *       existing DB subnet group.</p>
 *
 * @throws {@link InvalidDBSubnetGroupStateFault} (client fault)
 *  <p>The DB subnet group cannot be deleted because it is in use.</p>
 *
 * @throws {@link InvalidDBSubnetStateFault} (client fault)
 *  <p>The DB subnet is not in the <i>available</i> state.</p>
 *
 *
 */
export class DeleteDBSubnetGroupCommand extends $Command<
  DeleteDBSubnetGroupCommandInput,
  DeleteDBSubnetGroupCommandOutput,
  NeptuneClientResolvedConfig
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
  constructor(readonly input: DeleteDBSubnetGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDBSubnetGroupCommandInput, DeleteDBSubnetGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteDBSubnetGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "DeleteDBSubnetGroupCommand";
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
  private serialize(input: DeleteDBSubnetGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteDBSubnetGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDBSubnetGroupCommandOutput> {
    return deserializeAws_queryDeleteDBSubnetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
