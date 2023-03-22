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

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { GetUploadRequest, GetUploadResult, GetUploadResultFilterSensitiveLog } from "../models/models_0";
import { deserializeAws_json1_1GetUploadCommand, serializeAws_json1_1GetUploadCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link GetUploadCommand}.
 */
export interface GetUploadCommandInput extends GetUploadRequest {}
/**
 * @public
 *
 * The output of {@link GetUploadCommand}.
 */
export interface GetUploadCommandOutput extends GetUploadResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about an upload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetUploadCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetUploadCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new GetUploadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetUploadCommandInput - {@link GetUploadCommandInput}
 * @returns {@link GetUploadCommandOutput}
 * @see {@link GetUploadCommandInput} for command's `input` shape.
 * @see {@link GetUploadCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit was exceeded.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified entity was not found.</p>
 *
 * @throws {@link ServiceAccountException} (client fault)
 *  <p>There was a problem with the service account.</p>
 *
 *
 * @example To get information about a specific upload
 * ```javascript
 * // The following example gets information about a specific upload.
 * const input = {
 *   "arn": "arn:aws:devicefarm:us-west-2:123456789101:upload:EXAMPLE-GUID-123-456"
 * };
 * const command = new GetUploadCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "upload": {}
 * }
 * *\/
 * // example id: to-get-information-about-a-specific-upload-1471025996221
 * ```
 *
 */
export class GetUploadCommand extends $Command<
  GetUploadCommandInput,
  GetUploadCommandOutput,
  DeviceFarmClientResolvedConfig
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
  constructor(readonly input: GetUploadCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetUploadCommandInput, GetUploadCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetUploadCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "GetUploadCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetUploadResultFilterSensitiveLog,
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
  private serialize(input: GetUploadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetUploadCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetUploadCommandOutput> {
    return deserializeAws_json1_1GetUploadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
