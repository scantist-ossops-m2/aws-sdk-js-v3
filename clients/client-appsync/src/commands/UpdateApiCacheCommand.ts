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

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { UpdateApiCacheRequest, UpdateApiCacheResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateApiCacheCommand,
  serializeAws_restJson1UpdateApiCacheCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateApiCacheCommand}.
 */
export interface UpdateApiCacheCommandInput extends UpdateApiCacheRequest {}
/**
 * @public
 *
 * The output of {@link UpdateApiCacheCommand}.
 */
export interface UpdateApiCacheCommandOutput extends UpdateApiCacheResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the cache for the GraphQL API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, UpdateApiCacheCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, UpdateApiCacheCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new UpdateApiCacheCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateApiCacheCommandInput - {@link UpdateApiCacheCommandInput}
 * @returns {@link UpdateApiCacheCommandOutput}
 * @see {@link UpdateApiCacheCommandInput} for command's `input` shape.
 * @see {@link UpdateApiCacheCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the
 *          field values, and then try again.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Another modification is in progress at this time and it must complete before you can make your
 *          change.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal AppSync error occurred. Try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the resource, and then try again.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You aren't authorized to perform this operation.</p>
 *
 *
 */
export class UpdateApiCacheCommand extends $Command<
  UpdateApiCacheCommandInput,
  UpdateApiCacheCommandOutput,
  AppSyncClientResolvedConfig
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
  constructor(readonly input: UpdateApiCacheCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateApiCacheCommandInput, UpdateApiCacheCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateApiCacheCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "UpdateApiCacheCommand";
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
  private serialize(input: UpdateApiCacheCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateApiCacheCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateApiCacheCommandOutput> {
    return deserializeAws_restJson1UpdateApiCacheCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
