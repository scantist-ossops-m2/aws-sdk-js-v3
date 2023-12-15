// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ListSpacesRequest, ListSpacesResponse } from "../models/models_4";
import { de_ListSpacesCommand, se_ListSpacesCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSpacesCommand}.
 */
export interface ListSpacesCommandInput extends ListSpacesRequest {}
/**
 * @public
 *
 * The output of {@link ListSpacesCommand}.
 */
export interface ListSpacesCommandOutput extends ListSpacesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists spaces.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListSpacesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListSpacesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListSpacesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SortOrder: "Ascending" || "Descending",
 *   SortBy: "CreationTime" || "LastModifiedTime",
 *   DomainIdEquals: "STRING_VALUE",
 *   SpaceNameContains: "STRING_VALUE",
 * };
 * const command = new ListSpacesCommand(input);
 * const response = await client.send(command);
 * // { // ListSpacesResponse
 * //   Spaces: [ // SpaceList
 * //     { // SpaceDetails
 * //       DomainId: "STRING_VALUE",
 * //       SpaceName: "STRING_VALUE",
 * //       Status: "Deleting" || "Failed" || "InService" || "Pending" || "Updating" || "Update_Failed" || "Delete_Failed",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       SpaceSettingsSummary: { // SpaceSettingsSummary
 * //         AppType: "JupyterServer" || "KernelGateway" || "DetailedProfiler" || "TensorBoard" || "VSCode" || "Savitur" || "CodeEditor" || "JupyterLab" || "RStudioServerPro" || "RSession" || "RSessionGateway" || "Canvas" || "DatasetManager" || "SageMakerLite" || "Local",
 * //         SpaceStorageSettings: { // SpaceStorageSettings
 * //           EbsStorageSettings: { // EbsStorageSettings
 * //             EbsVolumeSizeInGb: Number("int"), // required
 * //           },
 * //         },
 * //       },
 * //       SpaceSharingSettingsSummary: { // SpaceSharingSettingsSummary
 * //         SharingType: "Private" || "Shared",
 * //       },
 * //       OwnershipSettingsSummary: { // OwnershipSettingsSummary
 * //         OwnerUserProfileName: "STRING_VALUE",
 * //       },
 * //       SpaceDisplayName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSpacesCommandInput - {@link ListSpacesCommandInput}
 * @returns {@link ListSpacesCommandOutput}
 * @see {@link ListSpacesCommandInput} for command's `input` shape.
 * @see {@link ListSpacesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class ListSpacesCommand extends $Command<
  ListSpacesCommandInput,
  ListSpacesCommandOutput,
  SageMakerClientResolvedConfig
> {
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
  constructor(readonly input: ListSpacesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSpacesCommandInput, ListSpacesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListSpacesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListSpacesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "ListSpaces",
      },
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
  private serialize(input: ListSpacesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSpacesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSpacesCommandOutput> {
    return de_ListSpacesCommand(output, context);
  }
}
