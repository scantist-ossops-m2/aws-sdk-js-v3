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

import { GetTraceSummariesRequest, GetTraceSummariesResult } from "../models/models_0";
import {
  deserializeAws_restJson1GetTraceSummariesCommand,
  serializeAws_restJson1GetTraceSummariesCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 *
 * The input for {@link GetTraceSummariesCommand}.
 */
export interface GetTraceSummariesCommandInput extends GetTraceSummariesRequest {}
/**
 * @public
 *
 * The output of {@link GetTraceSummariesCommand}.
 */
export interface GetTraceSummariesCommandOutput extends GetTraceSummariesResult, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves IDs and annotations for traces available for a specified time frame using an
 *       optional filter. To get the full traces, pass the trace IDs to
 *       <code>BatchGetTraces</code>.</p>
 *          <p>A filter expression can target traced requests that hit specific service nodes or
 *       edges, have errors, or come from a known user. For example, the following filter expression
 *       targets traces that pass through <code>api.example.com</code>:</p>
 *          <p>
 *             <code>service("api.example.com")</code>
 *          </p>
 *          <p>This filter expression finds traces that have an annotation named <code>account</code>
 *       with the value <code>12345</code>:</p>
 *          <p>
 *             <code>annotation.account = "12345"</code>
 *          </p>
 *          <p>For a full list of indexed fields and keywords that you can use in filter expressions,
 *       see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-console-filters.html">Using Filter
 *         Expressions</a> in the <i>Amazon Web Services X-Ray Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetTraceSummariesCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetTraceSummariesCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new GetTraceSummariesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetTraceSummariesCommandInput - {@link GetTraceSummariesCommandInput}
 * @returns {@link GetTraceSummariesCommandOutput}
 * @see {@link GetTraceSummariesCommandInput} for command's `input` shape.
 * @see {@link GetTraceSummariesCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for XRayClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is missing required parameters or has invalid parameters.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>The request exceeds the maximum number of requests per second.</p>
 *
 *
 */
export class GetTraceSummariesCommand extends $Command<
  GetTraceSummariesCommandInput,
  GetTraceSummariesCommandOutput,
  XRayClientResolvedConfig
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
  constructor(readonly input: GetTraceSummariesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: XRayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTraceSummariesCommandInput, GetTraceSummariesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetTraceSummariesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "XRayClient";
    const commandName = "GetTraceSummariesCommand";
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
  private serialize(input: GetTraceSummariesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetTraceSummariesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTraceSummariesCommandOutput> {
    return deserializeAws_restJson1GetTraceSummariesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
