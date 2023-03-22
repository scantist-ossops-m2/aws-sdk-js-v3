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

import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { ListBotLocalesRequest, ListBotLocalesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListBotLocalesCommand,
  serializeAws_restJson1ListBotLocalesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListBotLocalesCommand}.
 */
export interface ListBotLocalesCommandInput extends ListBotLocalesRequest {}
/**
 * @public
 *
 * The output of {@link ListBotLocalesCommand}.
 */
export interface ListBotLocalesCommandOutput extends ListBotLocalesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets a list of locales for the specified bot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListBotLocalesCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListBotLocalesCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new ListBotLocalesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListBotLocalesCommandInput - {@link ListBotLocalesCommandInput}
 * @returns {@link ListBotLocalesCommandOutput}
 * @see {@link ListBotLocalesCommandInput} for command's `input` shape.
 * @see {@link ListBotLocalesCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have reached a quota for your bot. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request rate is too high. Reduce the frequency of
 *          requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters in your request isn't valid. Check the
 *          parameters and try your request again.</p>
 *
 *
 */
export class ListBotLocalesCommand extends $Command<
  ListBotLocalesCommandInput,
  ListBotLocalesCommandOutput,
  LexModelsV2ClientResolvedConfig
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
  constructor(readonly input: ListBotLocalesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBotLocalesCommandInput, ListBotLocalesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListBotLocalesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "ListBotLocalesCommand";
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
  private serialize(input: ListBotLocalesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListBotLocalesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBotLocalesCommandOutput> {
    return deserializeAws_restJson1ListBotLocalesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
