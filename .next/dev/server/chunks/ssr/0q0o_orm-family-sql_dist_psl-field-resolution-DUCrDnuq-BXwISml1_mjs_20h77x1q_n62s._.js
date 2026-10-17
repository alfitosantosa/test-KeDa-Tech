module.exports = [
"[project]/node_modules/@prisma/orm-family-sql/dist/psl-field-resolution-DUCrDnuq-BXwISml1.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "S",
    ()=>toNamedTypeFieldDescriptor,
    "_",
    ()=>readDataTypeDefault,
    "a",
    ()=>describeUnsupportedSqlAttribute,
    "b",
    ()=>sqlAttributeSpecs,
    "c",
    ()=>getAuthoringEntity,
    "d",
    ()=>instantiatePslTypeConstructor,
    "f",
    ()=>interpretFieldAttribute,
    "g",
    ()=>modelCoordinateKey,
    "h",
    ()=>modelAttributeSpecsFrom,
    "i",
    ()=>contractError,
    "l",
    ()=>getNamedArgument,
    "m",
    ()=>mapFieldNamesToColumns,
    "n",
    ()=>bareTypeConstructorOf,
    "o",
    ()=>formatDbAttributeMigrationMessage,
    "p",
    ()=>interpretModelAttribute,
    "r",
    ()=>collectResolvedFields,
    "s",
    ()=>getAttribute,
    "t",
    ()=>PSL_CHECK_ON_STI_VARIANT,
    "u",
    ()=>instantiateFieldTypeConstructor,
    "v",
    ()=>readWrittenNumberForCodec,
    "x",
    ()=>storageName,
    "y",
    ()=>resolveFieldTypeDescriptor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$expression$2d$D7GsLgDM$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-family-sql/dist/sql-expression-D7GsLgDM.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$validators$2d$Ddcw8nHL$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-family-sql/dist/validators-Ddcw8nHL.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$DAbro9yn$2d$BgBbql$2d$q$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-family-sql/dist/derived-checks-DAbro9yn-BgBbql-q.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/structured-error-BXbihKQ-.mjs [app-rsc] (ecmascript) <export o as structuredError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DcJL9g8s$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__admittedForms$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/authoring-DcJL9g8s.mjs [app-rsc] (ecmascript) <export t as admittedForms>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DcJL9g8s$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__castTypedValue$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/authoring-DcJL9g8s.mjs [app-rsc] (ecmascript) <export r as castTypedValue>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DcJL9g8s$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__describeExpected$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/authoring-DcJL9g8s.mjs [app-rsc] (ecmascript) <export a as describeExpected>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DcJL9g8s$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__describeRefusal$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/authoring-DcJL9g8s.mjs [app-rsc] (ecmascript) <export o as describeRefusal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DcJL9g8s$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__s__as__describeRefusedValueType$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/authoring-DcJL9g8s.mjs [app-rsc] (ecmascript) <export s as describeRefusedValueType>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DcJL9g8s$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__u__as__exactRewrite$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/authoring-DcJL9g8s.mjs [app-rsc] (ecmascript) <export u as exactRewrite>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$presets$2d$DUCEijgt$2d$CODhqGVy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$5f$__as__instantiateAuthoringTypeConstructor$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/temporal-presets-DUCEijgt-CODhqGVy.mjs [app-rsc] (ecmascript) <export _ as instantiateAuthoringTypeConstructor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$presets$2d$DUCEijgt$2d$CODhqGVy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__y__as__isAuthoringEntityTypeDescriptor$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/temporal-presets-DUCEijgt-CODhqGVy.mjs [app-rsc] (ecmascript) <export y as isAuthoringEntityTypeDescriptor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DcJL9g8s$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__g__as__readWrittenValue$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/authoring-DcJL9g8s.mjs [app-rsc] (ecmascript) <export g as readWrittenValue>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DcJL9g8s$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$5f$__as__tagForm$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/authoring-DcJL9g8s.mjs [app-rsc] (ecmascript) <export _ as tagForm>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$presets$2d$DUCEijgt$2d$CODhqGVy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__R__as__validateAuthoringHelperArguments$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/temporal-presets-DUCEijgt-CODhqGVy.mjs [app-rsc] (ecmascript) <export R as validateAuthoringHelperArguments>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$presets$2d$DUCEijgt$2d$CODhqGVy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__z__as__validateAuthoringTypeParams$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/temporal-presets-DUCEijgt-CODhqGVy.mjs [app-rsc] (ecmascript) <export z as validateAuthoringTypeParams>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$U$2d$xbQys_$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__canonicalFormOf$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/codec-U-xbQys_.mjs [app-rsc] (ecmascript) <export c as canonicalFormOf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$resolve$2d$codec$2d$qqMjZrmn$2d$Cok8elAo$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__codecForRef$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/resolve-codec-qqMjZrmn-Cok8elAo.mjs [app-rsc] (ecmascript) <export r as codecForRef>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/casts-DpaahrlC-Bd5n2coI.mjs [app-rsc] (ecmascript) <export t as blindCast>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/defined-BQWA85QH-BRSBMULx.mjs [app-rsc] (ecmascript) <export t as ifDefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/internal-error-ChGYPVpq-DhUD05u0.mjs [app-rsc] (ecmascript) <export t as InternalError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__isInternalError$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/internal-error-ChGYPVpq-DhUD05u0.mjs [app-rsc] (ecmascript) <export r as isInternalError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$declarations$2d$5xLxC310$2d$R3$2d$Z4vcK$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ArrayLiteralAst$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/declarations-5xLxC310-R3-Z4vcK.mjs [app-rsc] (ecmascript) <export t as ArrayLiteralAst>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$declarations$2d$5xLxC310$2d$R3$2d$Z4vcK$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__l__as__FunctionCallAst$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/declarations-5xLxC310-R3-Z4vcK.mjs [app-rsc] (ecmascript) <export l as FunctionCallAst>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$declarations$2d$5xLxC310$2d$R3$2d$Z4vcK$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__d__as__IdentifierAst$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/declarations-5xLxC310-R3-Z4vcK.mjs [app-rsc] (ecmascript) <export d as IdentifierAst>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__assertDefined$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/assertions-Dw1lZz_Q.mjs [app-rsc] (ecmascript) <export t as assertDefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__invariant$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/assertions-Dw1lZz_Q.mjs [app-rsc] (ecmascript) <export n as invariant>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$presets$2d$DUCEijgt$2d$CODhqGVy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__f__as__describeTaggedLiteralFailure$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/temporal-presets-DUCEijgt-CODhqGVy.mjs [app-rsc] (ecmascript) <export f as describeTaggedLiteralFailure>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$result$2d$8OXF26MN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__notOk$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/result-8OXF26MN.mjs [app-rsc] (ecmascript) <export n as notOk>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$result$2d$8OXF26MN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__ok$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/result-8OXF26MN.mjs [app-rsc] (ecmascript) <export r as ok>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/psl-parser.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$resolve$2d$C8PUf8zv$2d$QAvnPhCt$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__diagnosticSource$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/resolve-C8PUf8zv-QAvnPhCt.mjs [app-rsc] (ecmascript) <export r as diagnosticSource>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$resolve$2d$C8PUf8zv$2d$QAvnPhCt$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__nodePslSpan$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/resolve-C8PUf8zv-QAvnPhCt.mjs [app-rsc] (ecmascript) <export o as nodePslSpan>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser_$5f$interpret$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/psl-parser__interpret.mjs [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
//#region ../../../2-sql/2-authoring/contract-psl/dist/psl-field-resolution-DUCrDnuq.mjs
function storageName(symbol, physicalNames) {
    const name = physicalNames.get(symbol);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__assertDefined$3e$__["assertDefined"])(name, "Physical names are populated for every model and field before lowering");
    return name;
}
function getAttribute(attributes, name) {
    return attributes?.find((attribute)=>attribute.name === name);
}
function formatDbAttributeMigrationMessage(attribute) {
    const renderedArguments = attribute.args.map((argument)=>argument.kind === "named" && argument.name !== void 0 ? `${argument.name}: ${argument.value}` : argument.value).join(", ");
    const argumentList = attribute.args.length === 0 ? "" : `(${renderedArguments})`;
    const constructorName = attribute.name.slice(3);
    return `@${attribute.name}${argumentList} is no longer supported; use ${constructorName}${argumentList} in type position`;
}
function getNamedArgument(attribute, name) {
    const entry = attribute.args.find((arg)=>arg.kind === "named" && arg.name === name);
    if (entry?.kind !== "named") return;
    return entry.value;
}
function mapFieldNamesToColumns(input) {
    const columns = [];
    for (const fieldName of input.fieldNames){
        const field = input.model.fields[fieldName];
        if (field === void 0) {
            input.diagnostics.push({
                code: "PSL_INVALID_ATTRIBUTE_ARGUMENT",
                message: `${input.entityLabel} references unknown field "${input.model.name}.${fieldName}"`,
                ...input.source.at(input.span)
            });
            return;
        }
        columns.push(storageName(field, input.physicalNames));
    }
    return columns;
}
function contractError(code, message, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])(code, message, options);
}
/** A written value the column's codec refuses. */ const PSL_INVALID_DEFAULT_LITERAL = "PSL_INVALID_DEFAULT_LITERAL";
/** A written value whose data type the receiving type neither is nor casts from. */ const PSL_VALUE_TYPE_INCOMPATIBLE = "PSL_VALUE_TYPE_INCOMPATIBLE";
/** A single value written as the default of a column that holds a list. */ const PSL_DEFAULT_LIST_EXPECTED = "PSL_DEFAULT_LIST_EXPECTED";
function messageOf(error) {
    return error instanceof Error ? error.message : String(error);
}
function refused(refusal, suggestedTypes) {
    return {
        ok: false,
        refusal,
        suggestedTypes
    };
}
function readOneValue(dataTypes, written, elementIndex, suggestedTypes) {
    const read = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DcJL9g8s$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__g__as__readWrittenValue$3e$__["readWrittenValue"])(dataTypes, written);
    return read.ok ? {
        ok: true,
        typed: read.value
    } : refused({
        ...read.failure,
        elementIndex
    }, suggestedTypes);
}
/** The column's `typeParams` as the codec reference carries them, so `vector(3)` checks its length. */ function codecRefTypeParams(typeParams) {
    return typeParams === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(typeParams);
}
/** A value in the canonical form of the column's values, when they have one. */ function inCanonicalForm(toCanonicalForm, value, elementIndex, suggestedTypes) {
    if (toCanonicalForm === void 0) return {
        ok: true,
        value
    };
    try {
        return {
            ok: true,
            value: toCanonicalForm(value)
        };
    } catch (error) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__isInternalError$3e$__["isInternalError"])(error)) throw error;
        return {
            ok: false,
            refusal: {
                kind: "unreadable",
                message: messageOf(error),
                elementIndex
            },
            suggestedTypes
        };
    }
}
/**
* The column's codec descriptor, and `read`, which reads a value in its stored JSON form with the column's codec, built with the column's type parameters, and gives it the canonical form of the column's values.
*/ function storedValueReader(input) {
    const descriptor = input.codecLookup.descriptorFor(input.column.codecId);
    const codec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$resolve$2d$codec$2d$qqMjZrmn$2d$Cok8elAo$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__codecForRef$3e$__["codecForRef"])(input.codecLookup, {
        codecId: input.column.codecId,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("typeParams", codecRefTypeParams(input.column.typeParams))
    });
    if (codec === void 0 || descriptor === void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__["InternalError"](`Field "${input.fieldPath}": no codec descriptor is registered for "${input.column.codecId}", but the column was resolved from one.`);
    const suggestedTypes = [
        descriptor.dataType
    ];
    const toCanonicalForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$U$2d$xbQys_$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__canonicalFormOf$3e$__["canonicalFormOf"])(descriptor, input.dataTypeLookup);
    const read = (written, elementIndex)=>{
        try {
            codec.decodeJson(written);
        } catch (error) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__isInternalError$3e$__["isInternalError"])(error)) throw error;
            return {
                ok: false,
                refusal: {
                    kind: "refused-by-codec",
                    codecId: input.column.codecId,
                    message: messageOf(error),
                    elementIndex
                },
                suggestedTypes
            };
        }
        return inCanonicalForm(toCanonicalForm, written, elementIndex, suggestedTypes);
    };
    return {
        descriptor,
        read
    };
}
/**
* Reads a value already in its stored JSON form, such as one member of a JSON document default, with the column's codec, and gives it the canonical form of the column's values. Worded as {@link lowerDataTypeDefault} words the same refusals.
*/ function readStoredValue(input) {
    const reading = storedValueReader(input).read(input.value, void 0);
    return reading.ok ? reading : storedRefusalDiagnostic(reading.refusal, `Field "${input.fieldPath}"`);
}
/**
* Read one `@default(...)` value for a column, refusing in parts so each contract source words its
* own diagnostic. `isList` selects the check: a list column's elements are each read and cast
* against the element codec's data type, while a scalar column takes a written list only through
* its type's list cast — which is how `pgvector.Vector(3) @default([0.1, 0.2])` is read.
*/ function readDataTypeDefault(input) {
    const { descriptor, read: readStored } = storedValueReader({
        ...input,
        dataTypeLookup: input.dataTypes.lookup
    });
    const columnType = descriptor.dataType;
    const suggestedTypes = [
        columnType
    ];
    const readOne = (written, elementIndex)=>{
        const read = readOneValue(input.dataTypes, written, elementIndex, suggestedTypes);
        if (!read.ok) return read;
        const cast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DcJL9g8s$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__castTypedValue$3e$__["castTypedValue"])(input.dataTypes, columnType, read.typed);
        if (!cast.ok) return refused({
            ...cast.failure,
            elementIndex
        }, suggestedTypes);
        return readStored(cast.value.value, elementIndex);
    };
    if (input.written.kind !== "list") {
        if (input.isList) return refused({
            kind: "not-a-list",
            elementIndex: void 0
        }, suggestedTypes);
        return readOne(input.written, void 0);
    }
    if (input.isList) {
        const elements = [];
        for (const [elementIndex, written] of input.written.elements.entries()){
            if (written.kind === "list") return nestedList(elementIndex, suggestedTypes);
            const element = readOne(written, elementIndex);
            if (!element.ok) return element;
            elements.push(element.value);
        }
        return {
            ok: true,
            value: elements
        };
    }
    return readListIntoScalar({
        ...input,
        written: input.written,
        columnType,
        readStored
    });
}
function nestedList(elementIndex, suggestedTypes) {
    return refused({
        kind: "unreadable",
        message: "a list holds values, not other lists",
        elementIndex
    }, suggestedTypes);
}
/** A written list on a column that is not a list: the column's type takes it through its list cast. */ function readListIntoScalar(input) {
    const declaration = input.dataTypes.lookup.get(input.columnType);
    const listCast = declaration?.listCast;
    if (listCast === void 0) return refused({
        kind: "no-list-cast",
        receivingType: input.columnType,
        casts: Object.keys(declaration?.casts ?? {}),
        elementIndex: void 0
    }, [
        input.columnType
    ]);
    const elements = [];
    for (const [elementIndex, written] of input.written.elements.entries()){
        if (written.kind === "list") return nestedList(elementIndex, listCast.of);
        const read = readOneValue(input.dataTypes, written, elementIndex, listCast.of);
        if (!read.ok) return read;
        if (!listCast.of.includes(read.typed.type)) return refused({
            kind: "no-element-cast",
            receivingType: input.columnType,
            valueType: read.typed.type,
            elementTypes: listCast.of,
            elementIndex
        }, listCast.of);
        elements.push(read.typed.value);
    }
    try {
        return input.readStored(listCast.cast(elements), void 0);
    } catch (error) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__isInternalError$3e$__["isInternalError"])(error)) throw error;
        return refused({
            kind: "unreadable",
            message: messageOf(error),
            elementIndex: void 0
        }, [
            input.columnType
        ]);
    }
}
/** Where a diagnostic is about, for a message: `Field "N.count" at element 2`. */ function location(subject, elementIndex) {
    return elementIndex === void 0 ? subject : `${subject} at element ${elementIndex + 1}`;
}
/**
* What may be written where every one of `types` is received, each form once: `a number`. A column
* whose type nothing writes still takes a `sql` literal, which `@default` stores as a SQL expression.
*/ function formsOf(dataTypes, types) {
    const forms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DcJL9g8s$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__admittedForms$3e$__["admittedForms"])(dataTypes, types);
    return forms.length === 0 ? [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DcJL9g8s$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$5f$__as__tagForm$3e$__["tagForm"])("sql")
    ] : forms;
}
/** The exact rewrite of the written value a `no-cast` refusal is about, before list elements are renumbered to the source list. */ function rewriteOf(refusal, written, dataTypes) {
    if (refusal.kind !== "no-cast") return void 0;
    const refused = refusal.elementIndex === void 0 || written.kind !== "list" ? written : written.elements[refusal.elementIndex];
    return refused === void 0 || refused.kind === "list" ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DcJL9g8s$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__u__as__exactRewrite$3e$__["exactRewrite"])(dataTypes, refusal.receivingType, refused);
}
/** {@link readDataTypeDefault} worded as a PSL diagnostic's code and message. */ function lowerDataTypeDefault(input) {
    const read = readDataTypeDefault(input);
    return read.ok ? read : refusalDiagnostic(atSourceElement(read.refusal, input.sourceElementIndexes), `Field "${input.fieldPath}"`, input.dataTypes, guidanceFor(read, input.written, input.dataTypes));
}
/**
* Reads one number literal written in a contract source outside a default, such as an enum member's value, from its source text for a codec, as {@link lowerDataTypeDefault} reads a default: the number's entry gives it a data type, the codec's data type takes it directly or through a cast, and the codec checks it. A refusal is worded for `subject`.
*/ function readWrittenNumberForCodec(input) {
    const written = {
        kind: "number",
        text: input.text
    };
    const read = readDataTypeDefault({
        written,
        isList: false,
        column: {
            codecId: input.codecId
        },
        codecLookup: input.codecLookup,
        dataTypes: input.dataTypes,
        fieldPath: input.subject
    });
    return read.ok ? read : refusalDiagnostic(read.refusal, input.subject, input.dataTypes, guidanceFor(read, written, input.dataTypes));
}
/** What a refusal of `written` tells the author to write instead. */ function guidanceFor(failure, written, dataTypes) {
    return {
        forms: formsOf(dataTypes, failure.suggestedTypes),
        rewrite: rewriteOf(failure.refusal, written, dataTypes)
    };
}
function atSourceElement(refusal, sourceElementIndexes) {
    if (refusal.elementIndex === void 0) return refusal;
    const elementIndex = sourceElementIndexes?.[refusal.elementIndex];
    return elementIndex === void 0 ? refusal : {
        ...refusal,
        elementIndex
    };
}
function codecRefusalDiagnostic(refusal, subject) {
    return {
        ok: false,
        code: PSL_INVALID_DEFAULT_LITERAL,
        message: `${location(subject, refusal.elementIndex)}: ${refusal.message}`,
        place: {
            kind: "attribute"
        }
    };
}
function storedRefusalDiagnostic(refusal, subject) {
    if (refusal.kind === "refused-by-codec") return codecRefusalDiagnostic(refusal, subject);
    return {
        ok: false,
        code: "PSL_INVALID_LITERAL",
        message: `${location(subject, refusal.elementIndex)}: ${refusal.message}`,
        place: {
            kind: "attribute"
        }
    };
}
/** A refusal worded as a PSL diagnostic's code, message and place; `guidance` says what to write instead. */ function refusalDiagnostic(refusal, subject, dataTypes, guidance) {
    const where = location(subject, refusal.elementIndex);
    const atWrittenValue = {
        kind: "written-value",
        elementIndex: refusal.elementIndex
    };
    switch(refusal.kind){
        case "not-a-list":
            return {
                ok: false,
                code: PSL_DEFAULT_LIST_EXPECTED,
                message: `${where}: this column holds a list, so its default is a list literal, as in [1, 2]`,
                place: {
                    kind: "attribute"
                }
            };
        case "refused-by-codec":
            return codecRefusalDiagnostic(refusal, subject);
        case "no-list-cast":
            return {
                ok: false,
                code: PSL_VALUE_TYPE_INCOMPATIBLE,
                message: `${where}: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DcJL9g8s$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__describeExpected$3e$__["describeExpected"])(guidance.forms)}; got a list`,
                place: atWrittenValue
            };
        case "no-element-cast":
            return {
                ok: false,
                code: PSL_VALUE_TYPE_INCOMPATIBLE,
                message: `${where}: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DcJL9g8s$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__s__as__describeRefusedValueType$3e$__["describeRefusedValueType"])(refusal, dataTypes, guidance)}`,
                place: atWrittenValue
            };
        default:
            {
                const { code, message } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DcJL9g8s$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__describeRefusal$3e$__["describeRefusal"])(refusal, dataTypes, guidance);
                return {
                    ok: false,
                    code,
                    message: `${where}: ${message}`,
                    place: atWrittenValue
                };
            }
    }
}
function formatSupportedFunctionList(registry) {
    const signatures = Array.from(registry.entries()).sort(([a], [b])=>a.localeCompare(b)).flatMap(([functionName, entry])=>{
        const usageSignatures = entry.usageSignatures?.filter((signature)=>signature.length > 0);
        return usageSignatures && usageSignatures.length > 0 ? usageSignatures : [
            `${functionName}()`
        ];
    });
    return signatures.length > 0 ? signatures.join(", ") : "none";
}
/** The diagnostic message for a `dbgenerated(...)` call, which raw SQL tagged literals replaced. */ function removedDbgeneratedMessage(registry) {
    return `Default function "dbgenerated" was removed. Write the SQL as a tagged literal: @default(sql\`<expression>\`). Supported functions: ${formatSupportedFunctionList(registry)}.`;
}
function lowerDefaultFunctionWithRegistry(input) {
    const entry = input.registry.get(input.call.fn);
    if (entry) {
        const result = entry.lower({
            call: input.call,
            context: input.context
        });
        return result.ok ? result : {
            ...result,
            kind: "external"
        };
    }
    const supportedFunctionList = formatSupportedFunctionList(input.registry);
    return {
        ok: false,
        kind: "owned",
        diagnostic: {
            code: "PSL_UNKNOWN_DEFAULT_FUNCTION",
            message: `Default function "${input.call.fn}" is not supported in SQL PSL provider v1. Supported functions: ${supportedFunctionList}.`,
            ...input.source.at(input.call.span)
        }
    };
}
function buildModelAttributeCtx(input) {
    return {
        sources: input.sources,
        selfModel: input.selfModel,
        binder: input.binder,
        symbols: input.symbols
    };
}
function buildFieldAttributeCtx(input) {
    return {
        sources: input.sources,
        selfModel: input.selfModel,
        field: input.field,
        binder: input.binder,
        symbols: input.symbols
    };
}
function modelAttributeSpecsFrom(modelAttributesByName) {
    const result = Object.create(null);
    for (const [name, descriptor] of modelAttributesByName)result[name] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(descriptor.spec);
    return result;
}
function interpretModelAttribute(input) {
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["interpretAttribute"])(input.node, input.spec, buildModelAttributeCtx({
        symbols: input.symbols,
        selfModel: input.model,
        sources: input.sources,
        binder: input.binder
    }));
    if (!result.ok) {
        input.diagnostics.push(...result.failure);
        return;
    }
    return result.value;
}
function interpretFieldAttribute(input) {
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["interpretAttribute"])(input.node, input.spec, buildFieldAttributeCtx({
        symbols: input.symbols,
        selfModel: input.model,
        field: input.field,
        sources: input.sources,
        binder: input.binder
    }));
    if (!result.ok) {
        input.diagnostics.push(...result.failure);
        return;
    }
    return result.value;
}
function validateMappedName(value, ctx, attributeNode) {
    return value.name === "" ? [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["leafDiagnostic"])(ctx, attributeNode, "Mapped name must not be empty")
    ] : [];
}
const mapModelSpec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["modelAttribute"])("map", {
    documentation: "Maps this model to a database table name.",
    positional: [
        {
            key: "name",
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])(),
            documentation: "The nonempty database table name."
        }
    ],
    refine: validateMappedName
});
const mapFieldSpec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fieldAttribute"])("map", {
    documentation: "Maps this field to a database column name.",
    positional: [
        {
            key: "name",
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])(),
            documentation: "The nonempty database column name."
        }
    ],
    refine: validateMappedName
});
function nullLiteral() {
    const nullIdentifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["identifier"])("null", {
        documentation: "A null list element or nullable scalar default."
    });
    return {
        kind: "null",
        label: "null",
        parse: (arg, ctx)=>{
            const result = nullIdentifier.parse(arg, ctx);
            return result.ok ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$result$2d$8OXF26MN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__ok$3e$__["ok"])(null) : result;
        }
    };
}
function scalarDefaultArms(isList, dataTypes, registries) {
    const tagArms = (admits)=>{
        const tagsByDocumentation = /* @__PURE__ */ new Map();
        for (const [dataType, entry] of Object.entries(dataTypes.entries)){
            if (entry.written.kind !== "tag" || !admits(dataType)) continue;
            const tags = tagsByDocumentation.get(entry.documentation);
            if (tags === void 0) tagsByDocumentation.set(entry.documentation, [
                entry.written.tag
            ]);
            else tags.push(entry.written.tag);
        }
        return [
            ...tagsByDocumentation
        ].map(([documentation, tags])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["taggedLiteral"])(tags, {
                documentation
            }));
    };
    const anyTag = ()=>tagArms(()=>true);
    const literal = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["oneOf"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["numLiteral"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bool"])(), nullLiteral(), ...tagArms((dataType)=>dataType !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$expression$2d$D7GsLgDM$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]));
    const listArm = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["list"])(literal(), {
            label: `list of (${literal().label})`
        });
    const funcArms = [
        ...registries.defaultFunctionRegistry.entries()
    ].map(([name, entry])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["funcCall"])(name, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(entry.signature)));
    return isList ? [
        listArm(),
        ...funcArms,
        ...anyTag()
    ] : [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["numLiteral"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bool"])(),
        nullLiteral(),
        ...funcArms,
        ...anyTag(),
        listArm()
    ];
}
/**
* The `@default` value arms, with a `dbgenerated(...)` call reported as removed before the arms
* are tried, so the author is told what replaced it instead of being shown the list of arms.
*/ function defaultValueArm(arms, registry) {
    const value = arms.length === 1 && arms[0].kind === "list" ? arms[0] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["oneOf"])(...arms);
    return {
        ...value,
        parse: (arg, ctx)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$declarations$2d$5xLxC310$2d$R3$2d$Z4vcK$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__l__as__FunctionCallAst$3e$__["FunctionCallAst"].cast(arg.syntax)?.path().join(".") === "dbgenerated" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$result$2d$8OXF26MN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__notOk$3e$__["notOk"])([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["leafDiagnostic"])(ctx, arg, removedDbgeneratedMessage(registry), "PSL_UNKNOWN_DEFAULT_FUNCTION")
            ]) : value.parse(arg, ctx)
    };
}
function noEnumMember() {
    return {
        kind: "rejecting",
        label: "enum member",
        message: "Enum declares no members",
        parse: (arg, ctx)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$result$2d$8OXF26MN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__notOk$3e$__["notOk"])([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["leafDiagnostic"])(ctx, arg, "Enum declares no members")
            ])
    };
}
function enumMemberNames(ctx) {
    const resolution = ctx.typeResolution;
    if (resolution?.kind !== "block" || resolution.symbol.keyword !== "enum") return void 0;
    const block = resolution.symbol;
    const names = [];
    const seen = /* @__PURE__ */ new Set();
    for (const entry of block.node.entries()){
        const key = entry.key()?.name();
        if (key === void 0 || seen.has(key)) continue;
        seen.add(key);
        names.push(key);
    }
    return names;
}
function enumDefaultArms(members, enumName, isList) {
    const [first, ...rest] = members;
    if (first === void 0) return [
        noEnumMember()
    ];
    const member = (name)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["identifier"])(name, {
            documentation: `The \`${name}\` member of enum \`${enumName}\`.`
        });
    if (isList) return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["list"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["oneOf"])(member(first), ...rest.map(member), nullLiteral()))
    ];
    return [
        member(first),
        ...rest.map(member)
    ];
}
function defaultFieldSpec(ctx) {
    const members = enumMemberNames(ctx);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fieldAttribute"])("default", {
        documentation: "Supplies a default value when this field is omitted from a mutation.",
        positional: [
            {
                key: "value",
                type: defaultValueArm(members === void 0 ? scalarDefaultArms(ctx.field.list, ctx.dataTypes, ctx.controlMutationDefaults) : enumDefaultArms(members, ctx.field.typeName, ctx.field.list), ctx.controlMutationDefaults.defaultFunctionRegistry),
                documentation: "A literal, enum member, or registered default function compatible with this field."
            }
        ]
    });
}
const idFieldSpec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fieldAttribute"])("id", {
    documentation: "Makes this field the primary key of the table.",
    named: {
        map: {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])()),
            documentation: "The database primary-key constraint name."
        }
    }
});
const uniqueFieldSpec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fieldAttribute"])("unique", {
    documentation: "Requires values in this field to be unique.",
    named: {
        map: {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])()),
            documentation: "The database unique-constraint name."
        }
    }
});
const noCheckKindArgument = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["oneOf"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["identifier"])("membership", {
        documentation: "Waives the generated check that values belong to the declared domain enum."
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["identifier"])("elementNotNull", {
        documentation: "Waives the generated check that scalar-list elements are non-null."
    }));
/**
* `@noCheck` waives generated CHECK constraints on one column: bare for every
* kind the column's shape derives, or naming concrete kinds. Two optional
* positional slots cover the whole kind vocabulary; a third argument is
* necessarily a duplicate and fails as excess arity.
*/ const noCheckFieldSpec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fieldAttribute"])("noCheck", {
    documentation: "Waives generated CHECK constraints for this column. With no arguments, waives every generated kind.",
    positional: [
        {
            key: "first",
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])(noCheckKindArgument()),
            documentation: "The first generated check kind to waive: `membership` or `elementNotNull`."
        },
        {
            key: "second",
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])(noCheckKindArgument()),
            documentation: "A second, distinct generated check kind to waive."
        }
    ],
    refine: (value, ctx, attributeNode)=>{
        if (value.first !== void 0 && value.first === value.second) return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["leafDiagnostic"])(ctx, attributeNode, "`@noCheck` names the same kind twice")
        ];
        return [];
    }
});
const idModelSpec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["modelAttribute"])("id", {
    documentation: "Declares a compound primary key for this table.",
    positional: [
        {
            key: "fields",
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["list"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fieldRef"])(), {
                allowEmpty: false,
                unique: true
            }),
            documentation: "The ordered, nonempty list of distinct primary-key fields."
        }
    ],
    named: {
        map: {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])()),
            documentation: "The database primary-key constraint name."
        }
    }
});
const uniqueModelSpec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["modelAttribute"])("unique", {
    documentation: "Requires the combination of these fields to be unique.",
    positional: [
        {
            key: "fields",
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["list"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fieldRef"])(), {
                allowEmpty: false,
                unique: true
            }),
            documentation: "The ordered, nonempty list of distinct fields in the unique constraint."
        }
    ],
    named: {
        map: {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])()),
            documentation: "The database unique-constraint name."
        }
    }
});
const PSL_INDEX_FIELDS_XOR_EXPRESSION = "PSL_INDEX_FIELDS_XOR_EXPRESSION";
const PSL_INDEX_EXPRESSION_REQUIRES_NAME = "PSL_INDEX_EXPRESSION_REQUIRES_NAME";
const PSL_INDEX_NAME_XOR_MAP = "PSL_INDEX_NAME_XOR_MAP";
const indexModelSpec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["modelAttribute"])("index", {
    documentation: "Declares a database index over fields or a SQL expression, optionally restricted by a predicate.",
    positional: [
        {
            key: "fields",
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["list"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fieldRef"])(), {
                allowEmpty: false,
                unique: true
            })),
            documentation: "The ordered list of distinct indexed fields. Mutually exclusive with `expression`."
        }
    ],
    named: {
        expression: {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])()),
            documentation: "The SQL index expression. Requires `name` or `map` and cannot be combined with a fields list."
        },
        where: {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])()),
            documentation: "The SQL predicate restricting rows included in a partial index."
        },
        unique: {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bool"])()),
            documentation: "Whether the index enforces uniqueness."
        },
        name: {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])()),
            documentation: "The index name. Mutually exclusive with `map`."
        },
        map: {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])()),
            documentation: "The database index name. Mutually exclusive with `name`."
        },
        type: {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])()),
            documentation: "The target-specific index access method."
        },
        options: {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["record"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])())),
            documentation: "Target-specific index options. Requires an explicit `type`."
        }
    },
    refine: (value, ctx, attributeNode)=>{
        const diagnostics = [];
        if (value.fields === void 0 === (value.expression === void 0)) diagnostics.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["leafDiagnostic"])(ctx, attributeNode, "`@@index` requires exactly one of a fields list or an `expression` argument", PSL_INDEX_FIELDS_XOR_EXPRESSION));
        if (value.expression !== void 0 && value.name === void 0 && value.map === void 0) diagnostics.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["leafDiagnostic"])(ctx, attributeNode, "`@@index` with an `expression` argument requires a `name` or `map` argument (a default name cannot be derived from an expression)", PSL_INDEX_EXPRESSION_REQUIRES_NAME));
        if (value.name !== void 0 && value.map !== void 0) diagnostics.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["leafDiagnostic"])(ctx, attributeNode, "`@@index` takes at most one of `name` and `map`", PSL_INDEX_NAME_XOR_MAP));
        if (value.options !== void 0 && value.type === void 0) diagnostics.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["leafDiagnostic"])(ctx, attributeNode, "`@@index` options argument requires a type argument"));
        return diagnostics;
    }
});
const PSL_CHECK_REQUIRES_NAME_OR_MAP = "PSL_CHECK_REQUIRES_NAME_OR_MAP";
const PSL_CHECK_NAME_XOR_MAP = "PSL_CHECK_NAME_XOR_MAP";
const PSL_CHECK_EXPRESSION_EMPTY = "PSL_CHECK_EXPRESSION_EMPTY";
/**
* A single-table-inheritance variant (`@@base` with no own `@@map`) shares
* its base model's storage table and has no table of its own to declare a
* check on — raised from {@link interpretPslDocumentToSqlContract}, not from
* this spec's own `refine`, because the rule needs the model's `@@base`
* declaration, which a single attribute's `refine` cannot see.
*/ const PSL_CHECK_ON_STI_VARIANT = "PSL_CHECK_ON_STI_VARIANT";
const checkModelSpec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["modelAttribute"])("check", {
    documentation: "Declares a named database CHECK constraint on this table.",
    named: {
        expression: {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])(),
            documentation: "The nonempty SQL predicate checked for each row."
        },
        name: {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])()),
            documentation: "The constraint name. Exactly one of `name` and `map` is required."
        },
        map: {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])()),
            documentation: "The database constraint name. Exactly one of `name` and `map` is required."
        }
    },
    refine: (value, ctx, attributeNode)=>{
        const diagnostics = [];
        if (value.expression.trim().length === 0) diagnostics.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["leafDiagnostic"])(ctx, attributeNode, "`@@check` expression must not be empty — an empty predicate is not a constraint", PSL_CHECK_EXPRESSION_EMPTY));
        if (value.name === void 0 && value.map === void 0) diagnostics.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["leafDiagnostic"])(ctx, attributeNode, "`@@check` requires a `name` or `map` argument (a default name cannot be derived — a check has no column tuple to name itself after)", PSL_CHECK_REQUIRES_NAME_OR_MAP));
        if (value.name !== void 0 && value.map !== void 0) diagnostics.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["leafDiagnostic"])(ctx, attributeNode, "`@@check` takes at most one of `name` and `map`", PSL_CHECK_NAME_XOR_MAP));
        return diagnostics;
    }
});
const controlModelSpec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["modelAttribute"])("control", {
    documentation: "Sets how schema management treats this model’s storage.",
    positional: [
        {
            key: "policy",
            documentation: "The storage control policy: `managed`, `tolerated`, `external`, or `observed`.",
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["oneOf"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["identifier"])("managed", {
                documentation: "Verifies the declared shape strictly and allows migrations to create, alter, or drop the storage object."
            }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["identifier"])("tolerated", {
                documentation: "Verifies declared columns while allowing extra columns. Migrations may create missing storage, but never alter or drop existing storage."
            }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["identifier"])("external", {
                documentation: "Verifies declared storage without creating, altering, or dropping it."
            }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["identifier"])("observed", {
                documentation: "Reports storage differences as warnings rather than verification failures and never emits migration operations."
            }))
        }
    ]
});
const discriminatorModelSpec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["modelAttribute"])("discriminator", {
    documentation: "Selects the field that identifies inheritance variants of this model.",
    positional: [
        {
            key: "field",
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fieldRef"])(),
            documentation: "The discriminator field on this model."
        }
    ]
});
function baseModelSpec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["modelAttribute"])("base", {
        documentation: "Declares this model as a variant of a base model.",
        positional: [
            {
                key: "base",
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["entityRef"])({
                    kind: "model"
                }),
                documentation: "The base model to inherit from."
            },
            {
                key: "value",
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])(),
                documentation: "The discriminator value identifying this variant."
            }
        ]
    });
}
function relationAttributeSpan(ctx) {
    const node = getAttribute(ctx.field.attributes, "relation")?.node;
    if (node !== void 0) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$resolve$2d$C8PUf8zv$2d$QAvnPhCt$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__nodePslSpan$3e$__["nodePslSpan"])(node.syntax, ctx.sources);
    return ctx.field.span;
}
function relationInvariants(parsed, ctx) {
    if (parsed.fields !== void 0 !== (parsed.references !== void 0)) return [
        {
            code: "PSL_INVALID_ATTRIBUTE_SYNTAX",
            message: `Relation field "${ctx.selfModel.name}.${ctx.field.name}" requires fields and references arguments`,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$resolve$2d$C8PUf8zv$2d$QAvnPhCt$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__diagnosticSource$3e$__["diagnosticSource"])(ctx.sources, ctx.field.node.syntax).at(relationAttributeSpan(ctx))
        }
    ];
    return [];
}
const referentialActionArgument = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["oneOf"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["identifier"])("NoAction", {
        documentation: "Rejects a change that would violate the foreign key when the constraint is checked; checking may be deferred when supported and configured."
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["identifier"])("Restrict", {
        documentation: "Rejects deleting or updating a referenced row while referencing rows remain, without deferring the check."
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["identifier"])("Cascade", {
        documentation: "Propagates deletion or key updates of a referenced row to its referencing rows."
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["identifier"])("SetNull", {
        documentation: "Sets referencing foreign-key fields to null when the referenced row is deleted or its key changes. The fields must allow null."
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["identifier"])("SetDefault", {
        documentation: "Sets referencing foreign-key fields to their defaults when the referenced row is deleted or its key changes. The resulting values must satisfy the foreign key."
    }));
const relationFieldSpec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fieldAttribute"])("relation", {
    documentation: "Defines the relation name, foreign-key fields, and referential actions for this relation.",
    positional: [
        {
            key: "name",
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])()),
            documentation: "The relation name used to pair both sides. May also be supplied by name."
        }
    ],
    named: {
        name: {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])()),
            documentation: "The relation name used to pair both sides. Cannot also be supplied positionally."
        },
        fields: {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["list"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fieldRef"])(), {
                allowEmpty: false,
                unique: true
            })),
            documentation: "The ordered local foreign-key fields. Must be supplied together with `references`."
        },
        references: {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["list"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["referencedFieldRef"])(), {
                allowEmpty: false,
                unique: true
            })),
            documentation: "The corresponding fields on the referenced model. Must be supplied together with `fields`."
        },
        map: {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["str"])()),
            documentation: "The database foreign-key constraint name."
        },
        onDelete: {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])(referentialActionArgument()),
            documentation: "The referential action when a referenced row is deleted."
        },
        onUpdate: {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])(referentialActionArgument()),
            documentation: "The referential action when a referenced key is updated."
        },
        index: {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["optional"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bool"])()),
            documentation: "Whether to create an index for the relation’s foreign-key fields."
        }
    },
    refine: relationInvariants
});
function fieldSpecContext(input) {
    const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["typeReferenceNode"])(input.field);
    return {
        symbols: input.symbols,
        model: input.model,
        field: input.field,
        typeResolution: node === void 0 ? void 0 : input.binder.symbolForNode(node),
        controlMutationDefaults: input.controlMutationDefaults,
        dataTypes: input.dataTypes
    };
}
const sqlAttributeSpecs = {
    model: {
        map: ()=>mapModelSpec,
        id: ()=>idModelSpec,
        unique: ()=>uniqueModelSpec,
        index: ()=>indexModelSpec,
        check: ()=>checkModelSpec,
        control: ()=>controlModelSpec,
        discriminator: ()=>discriminatorModelSpec,
        base: baseModelSpec
    },
    field: {
        map: ()=>mapFieldSpec,
        id: ()=>idFieldSpec,
        unique: ()=>uniqueFieldSpec,
        noCheck: ()=>noCheckFieldSpec,
        relation: ()=>relationFieldSpec,
        default: defaultFieldSpec
    }
};
/**
* The value-object column's default as the document it holds, and in the form the column stores. A
* column may store the document's JSON text, as `sqlite/json@1` does, so its codec reads the stored
* value into the document the composite type describes. A list literal on a list of value objects
* is read element by element; the column stores the list's document in its own form.
*/ function valueObjectDefaultDocument(input) {
    const codec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$resolve$2d$codec$2d$qqMjZrmn$2d$Cok8elAo$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__codecForRef$3e$__["codecForRef"])(input.codecLookup, {
        codecId: input.codecId
    });
    if (codec === void 0) return {
        document: input.stored,
        stored: input.stored
    };
    if (input.elementwise && Array.isArray(input.stored)) {
        const document = input.stored.map((element)=>readDocument(codec, element));
        return {
            document,
            stored: codec.encodeJson(document)
        };
    }
    return {
        document: readDocument(codec, input.stored),
        stored: input.stored
    };
}
/** The column's codec has already read `stored` while the default was lowered, so it reads again. */ function readDocument(codec, stored) {
    if (stored === null) return null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(codec.decodeJson(stored));
}
/** Each way the default does not match the composite type. */ function valueObjectDefaultMismatches(input) {
    const mismatches = [];
    const shape = (path, message)=>mismatches.push({
            code: PSL_VALUE_TYPE_INCOMPATIBLE,
            message: `Field "${path}": ${message}`
        });
    const checkObject = (value, valueObjectName, path)=>{
        const valueObject = input.types.nodes.get(valueObjectName);
        const declared = input.types.declaredMembers.get(valueObjectName);
        if (valueObject === void 0 || declared === void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__["InternalError"](`Field "${path}" is typed by the value object "${valueObjectName}", which the contract does not declare.`);
        if (!isJsonObject(value)) {
            shape(path, `a value of "${valueObjectName}" is a JSON object, not ${jsonKind(value)}`);
            return;
        }
        for (const key of Object.keys(value))if (!declared.has(key)) shape(path, `"${key}" is not a member of "${valueObjectName}"`);
        for (const member of valueObject.fields)checkMember(value[member.fieldName], member, `${path}.${member.fieldName}`);
    };
    const checkMember = (value, member, path)=>{
        if (value === void 0) {
            if (!member.nullable) shape(path, "the member is required, and the default has no value for it");
            return;
        }
        if (value === null && member.nullable) return;
        if (member.many === true) {
            if (!Array.isArray(value)) {
                shape(path, `the member is a list, so its value is a JSON array, not ${jsonKind(value)}`);
                return;
            }
            for (const [index, element] of value.entries()){
                if (element === null && member.elementNullable) continue;
                checkOne(element, member, `${path}[${index}]`, "an element of the member is not null");
            }
            return;
        }
        checkOne(value, member, path, "the member is not optional, so its value is not null");
    };
    const checkOne = (value, member, path, notNull)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$DAbro9yn$2d$BgBbql$2d$q$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"])(member)) {
            if (value === null) shape(path, notNull);
            else checkObject(value, member.valueObjectName, path);
            return;
        }
        const reading = readStoredValue({
            value,
            column: member.descriptor,
            codecLookup: input.codecLookup,
            dataTypeLookup: input.dataTypeLookup,
            fieldPath: path
        });
        if (!reading.ok) {
            if (value === null) shape(path, notNull);
            else mismatches.push({
                code: reading.code,
                message: reading.message
            });
            return;
        }
        const enumMismatch = enumValueMismatch(value, member, path, input.codecLookup);
        if (enumMismatch !== void 0) mismatches.push(enumMismatch);
    };
    if (input.value === null) {
        if (input.nullable) return mismatches;
        shape(input.fieldPath, input.list ? "the default of a list of value objects is a JSON array, not null" : "the default of a value object is a JSON object, not null");
        return mismatches;
    }
    if (input.list) {
        if (!Array.isArray(input.value)) {
            shape(input.fieldPath, `the default of a list of value objects is a JSON array, not ${jsonKind(input.value)}`);
            return mismatches;
        }
        for (const [index, element] of input.value.entries()){
            if (element === null && input.elementNullable) continue;
            checkObject(element, input.valueObjectName, `${input.fieldPath}[${index}]`);
        }
        return mismatches;
    }
    if (!isJsonObject(input.value)) {
        shape(input.fieldPath, `the default of a value object is a JSON object, not ${jsonKind(input.value)}`);
        return mismatches;
    }
    checkObject(input.value, input.valueObjectName, input.fieldPath);
    return mismatches;
}
/**
* A member typed by an enum takes only the enum's values, in the form its codec stores them, as a model field of that enum takes only its members.
*/ function enumValueMismatch(value, member, path, codecLookup) {
    const handle = member.enumTypeHandle;
    if (handle === void 0) return void 0;
    const codec = codecLookup.get(handle.codecId);
    const stored = handle.values.map((enumValue)=>codec === void 0 ? enumValue : codec.encodeJson(enumValue));
    if (stored.some((storedValue)=>storedValue === value)) return void 0;
    return {
        code: PSL_INVALID_DEFAULT_LITERAL,
        message: `Field "${path}": Expected one of: ${stored.map((storedValue)=>JSON.stringify(storedValue)).join(" | ")}`
    };
}
function isJsonObject(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}
function jsonKind(value) {
    if (value === null) return "null";
    if (Array.isArray(value)) return "a JSON array";
    if (typeof value === "object") return "a JSON object";
    return `a JSON ${typeof value}`;
}
function toNamedTypeFieldDescriptor(typeRef, descriptor) {
    return {
        codecId: descriptor.codecId,
        typeRef
    };
}
function argumentSpan(call, descriptors, index) {
    if (index === void 0) return call.span;
    const name = descriptors?.[index]?.name;
    const named = call.args.find((arg)=>arg.kind === "named" && arg.name === name);
    const positional = call.args.filter((arg)=>arg.kind === "positional")[index];
    return (named ?? positional)?.span ?? call.span;
}
/**
* Checks the type parameters a constructor or preset produced against its codec's parameter schema,
* reporting a failure at the argument the failing parameter came from. Returns whether they passed.
*/ function checkPslTypeParams(input) {
    const helperPath = input.call.path.join(".");
    try {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$presets$2d$DUCEijgt$2d$CODhqGVy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__z__as__validateAuthoringTypeParams$3e$__["validateAuthoringTypeParams"])(helperPath, input.template, input.typeParams, input.codecLookup.descriptorFor(input.template.codecId)?.paramsSchema);
        return true;
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        input.diagnostics.push({
            code: "PSL_INVALID_ATTRIBUTE_ARGUMENT",
            message: `${input.subject} ${message}`,
            ...input.source.at(argumentSpan(input.call, input.args, argumentIndexOf(error)))
        });
        return false;
    }
}
function argumentIndexOf(error) {
    if (typeof error !== "object" || error === null || !("details" in error)) return void 0;
    const { details } = error;
    if (typeof details !== "object" || details === null || !("argumentIndex" in details)) return;
    return typeof details.argumentIndex === "number" ? details.argumentIndex : void 0;
}
/**
* Walks `authoringContributions.entityTypes` segment-by-segment and returns
* the entity type descriptor at the resolved path, or `undefined` if no
* descriptor is registered.
*
* Used by the PSL interpreter to dispatch declarative entity-shaped
* declarations (`enum`, future `namespace { … }`, …) through the
* pack entity-type mechanism — the descriptor's `factory` (or
* `template`) materialises the IR-class instance without the
* interpreter knowing target-specific construction.
*/ function getAuthoringEntity(contributions, path) {
    let current = contributions?.entityTypes;
    for (const segment of path){
        if (typeof current !== "object" || current === null || "kind" in current) return;
        current = current[segment];
    }
    return current !== void 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$presets$2d$DUCEijgt$2d$CODhqGVy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__y__as__isAuthoringEntityTypeDescriptor$3e$__["isAuthoringEntityTypeDescriptor"])(current) ? current : void 0;
}
function instantiatePslTypeConstructor(input) {
    const helperPath = input.call.path.join(".");
    const args = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser_$5f$interpret$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mapPslHelperArgs"])({
        args: input.call.args,
        descriptors: input.descriptor.args ?? [],
        helperLabel: `constructor "${helperPath}"`,
        span: input.call.span,
        diagnostics: input.diagnostics,
        source: input.source,
        entityLabel: input.entityLabel
    });
    if (!args) return;
    let output;
    try {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$presets$2d$DUCEijgt$2d$CODhqGVy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__R__as__validateAuthoringHelperArguments$3e$__["validateAuthoringHelperArguments"])(helperPath, input.descriptor.args, args);
        output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$presets$2d$DUCEijgt$2d$CODhqGVy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$5f$__as__instantiateAuthoringTypeConstructor$3e$__["instantiateAuthoringTypeConstructor"])(input.descriptor, args);
    } catch (error) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__isInternalError$3e$__["isInternalError"])(error)) throw error;
        const message = error instanceof Error ? error.message : String(error);
        input.diagnostics.push({
            code: "PSL_INVALID_ATTRIBUTE_ARGUMENT",
            message: `${input.entityLabel} constructor "${helperPath}" ${message}`,
            ...input.source.at(input.call.span)
        });
        return;
    }
    return checkPslTypeParams({
        call: input.call,
        subject: `${input.entityLabel} constructor "${helperPath}"`,
        args: input.descriptor.args,
        template: input.descriptor.output,
        typeParams: output.typeParams,
        codecLookup: input.codecLookup,
        diagnostics: input.diagnostics,
        source: input.source
    }) ? output : void 0;
}
/**
* Structural check for a codec descriptor exposing the authoring-time
* `columnFromEntity` hook a type constructor's `entityRefArg` resolves
* through (e.g. the `pg/enum@1` codec descriptor). No casts.
*/ function hasColumnFromEntityHook(descriptor) {
    return "columnFromEntity" in descriptor && typeof descriptor.columnFromEntity === "function";
}
/**
* Resolves a type-constructor call whose descriptor declares an
* `entityRefArg` (e.g. `pg.enum(AalLevel)`): extracts the call's sole
* positional-argument ref string, resolves it against the field's
* namespace's already-lowered extension entities (keyed by the declared
* `entityRefArg.entityKind`, then block name), and converts the resolved
* entity to column params via the `columnFromEntity` authoring hook on the
* codec descriptor registered for `descriptor.output.codecId`. The
* `typeParams.typeName` `columnFromEntity` returns is bare — schema
* qualification (e.g. `auth.aal_level`) is a target concern, applied later
* when the target builds the field's namespace. A `valueSet` ref is
* attached when the same namespace derived a value-set under the same block
* name (the generic `deriveValueSet` mechanism), scoped to the field's own
* namespace.
*/ function resolveEntityRefTypeConstructorCall(input) {
    const entityRefArg = input.descriptor.entityRefArg;
    if (entityRefArg === void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__["InternalError"]("resolveEntityRefTypeConstructorCall called with a descriptor that does not declare an entityRefArg. This is an interpreter bug.");
    const helperPath = input.call.path.join(".");
    const positionalArgs = input.call.args.filter((arg)=>arg.kind === "positional");
    const ref = positionalArgs[entityRefArg.index]?.value;
    if (input.call.args.length !== 1 || positionalArgs.length !== 1 || ref === void 0) {
        input.diagnostics.push({
            code: "PSL_INVALID_ATTRIBUTE_ARGUMENT",
            message: `${input.entityLabel} type constructor "${helperPath}" expects exactly one positional argument naming the referenced entity`,
            ...input.source.at(input.call.span)
        });
        return NOT_RESOLVED;
    }
    const reportUnknownRef = ()=>{
        input.diagnostics.push({
            code: "PSL_UNKNOWN_ENTITY_REF",
            message: `${input.entityLabel} type constructor "${helperPath}(${ref})" does not resolve — no entity named "${ref}" was found in namespace "${input.namespaceId ?? "(unspecified)"}"`,
            ...input.source.at(input.call.span)
        });
        return NOT_RESOLVED;
    };
    const entity = input.namespaceExtensionEntities?.[entityRefArg.entityKind]?.[ref];
    if (entity === void 0) return reportUnknownRef();
    const codecId = input.descriptor.output.codecId;
    const codecDescriptor = input.codecLookup.descriptorFor(codecId);
    if (codecDescriptor === void 0 || !hasColumnFromEntityHook(codecDescriptor)) throw contractError("CONTRACT.PACK_CONTRIBUTION_INVALID", `Type constructor "${helperPath}" registers codecId "${codecId}" with an entity-ref argument, but its codec descriptor has no "columnFromEntity" authoring hook. This is a contributor bug in the pack registering "${helperPath}", not a user-schema error.`, {
        meta: {
            helperPath,
            codecId
        }
    });
    const resolved = codecDescriptor.columnFromEntity(entity);
    if (resolved === void 0) return reportUnknownRef();
    const derivedValueSet = input.namespaceExtensionEntities?.["valueSet"]?.[ref];
    if (derivedValueSet !== void 0 && input.namespaceId === void 0) {
        input.diagnostics.push({
            code: "PSL_INVALID_ATTRIBUTE_ARGUMENT",
            message: `${input.entityLabel} type constructor "${helperPath}(${ref})" resolves to a value-set-typed entity, but the field has no resolvable namespace to scope the value-set ref to`,
            ...input.source.at(input.call.span)
        });
        return NOT_RESOLVED;
    }
    const valueSet = derivedValueSet !== void 0 && input.namespaceId !== void 0 ? {
        plane: "storage",
        entityKind: "valueSet",
        namespaceId: input.namespaceId,
        entityName: ref
    } : void 0;
    return {
        ok: true,
        descriptor: {
            codecId,
            ...resolved.typeParams !== void 0 ? {
                typeParams: resolved.typeParams
            } : {},
            ...valueSet !== void 0 ? {
                valueSet
            } : {}
        }
    };
}
const NOT_RESOLVED = {
    ok: false
};
function instantiateFieldTypeConstructor(input) {
    if (input.descriptor.entityRefArg !== void 0) return resolveEntityRefTypeConstructorCall({
        call: input.call,
        descriptor: input.descriptor,
        namespaceId: input.namespaceId,
        namespaceExtensionEntities: input.namespaceExtensionEntities,
        codecLookup: input.codecLookup,
        diagnostics: input.diagnostics,
        source: input.source,
        entityLabel: input.entityLabel
    });
    const instantiated = instantiatePslTypeConstructor({
        call: input.call,
        descriptor: input.descriptor,
        codecLookup: input.codecLookup,
        diagnostics: input.diagnostics,
        source: input.source,
        entityLabel: input.entityLabel
    });
    return instantiated === void 0 ? NOT_RESOLVED : {
        ok: true,
        descriptor: instantiated
    };
}
function instantiateFieldPreset(input) {
    const instantiated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser_$5f$interpret$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["instantiatePslFieldPreset"])(input);
    if (!instantiated) return NOT_RESOLVED;
    if (!checkPslTypeParams({
        call: input.call,
        subject: `${input.entityLabel} preset "${input.call.path.join(".")}"`,
        args: input.descriptor.args,
        template: input.descriptor.output,
        typeParams: instantiated.descriptor.typeParams,
        codecLookup: input.codecLookup,
        diagnostics: input.diagnostics,
        source: input.source
    })) return NOT_RESOLVED;
    const presetContributions = {
        nullable: instantiated.nullable,
        id: instantiated.id,
        unique: instantiated.unique,
        ...instantiated.default !== void 0 ? {
            default: instantiated.default
        } : {},
        ...instantiated.executionDefaults !== void 0 ? {
            executionDefaults: instantiated.executionDefaults
        } : {}
    };
    return {
        ok: true,
        descriptor: instantiated.descriptor,
        presetContributions
    };
}
function bareTypeConstructorOf(resolution) {
    if (resolution?.kind !== "contributedType") return void 0;
    const { descriptor } = resolution.symbol;
    return descriptor.kind === "typeConstructor" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser_$5f$interpret$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isBareTypeConstructor"])(descriptor) ? descriptor : void 0;
}
function resolvedKindLabel(resolution) {
    switch(resolution.kind){
        case "compositeType":
            return "composite type";
        case "namedType":
            return "named type";
        case "block":
            return resolution.symbol.keyword;
        case "crossSpace":
            return "type of another contract space";
        default:
            return resolution.kind;
    }
}
function resolveFieldTypeDescriptor(input) {
    const { field, resolution, entityLabel, diagnostics } = input;
    if (field.malformedType || resolution === void 0) return NOT_RESOLVED;
    const source = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$resolve$2d$C8PUf8zv$2d$QAvnPhCt$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__diagnosticSource$3e$__["diagnosticSource"])(input.sources, field.node.syntax);
    const unsupported = (message)=>{
        diagnostics.push({
            code: "PSL_UNSUPPORTED_FIELD_TYPE",
            message,
            ...source.at(field.span)
        });
        return NOT_RESOLVED;
    };
    const call = field.typeConstructor;
    switch(resolution.kind){
        case "unresolved":
        case "namespace":
        case "contributedNamespace":
            return NOT_RESOLVED;
        case "contributedType":
            {
                const { descriptor, path } = resolution.symbol;
                const written = path.join(".");
                if (descriptor.kind === "fieldPreset") {
                    if (call === void 0) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser_$5f$interpret$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["reportPresetNotCalled"])({
                            entityLabel,
                            presetPath: written,
                            source,
                            span: field.span,
                            diagnostics
                        });
                        return NOT_RESOLVED;
                    }
                    return instantiateFieldPreset({
                        call,
                        descriptor,
                        codecLookup: input.codecLookup,
                        diagnostics,
                        source,
                        entityLabel
                    });
                }
                if (call !== void 0) return instantiateFieldTypeConstructor({
                    ...input,
                    call,
                    descriptor,
                    source
                });
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser_$5f$interpret$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isBareTypeConstructor"])(descriptor)) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser_$5f$interpret$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["reportTypeConstructorNotCalled"])({
                        entityLabel,
                        path: written,
                        descriptor,
                        source,
                        span: field.span,
                        diagnostics
                    });
                    return NOT_RESOLVED;
                }
                return {
                    ok: true,
                    descriptor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$presets$2d$DUCEijgt$2d$CODhqGVy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$5f$__as__instantiateAuthoringTypeConstructor$3e$__["instantiateAuthoringTypeConstructor"])(descriptor, [])
                };
            }
        case "field":
        case "attribute":
        case "parameter":
        case "function":
        case "constant":
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__["InternalError"](`The type of ${entityLabel} resolved to a ${resolution.kind}; a type reference never names one. This is a binder bug.`);
    }
    if (call !== void 0) return unsupported(`${entityLabel} calls "${call.path.join(".")}", which is a ${resolvedKindLabel(resolution)}, not a type constructor. Remove the arguments.`);
    switch(resolution.kind){
        case "namedType":
            {
                const descriptor = input.namedTypeDescriptors.get(resolution.symbol);
                return descriptor === void 0 ? NOT_RESOLVED : {
                    ok: true,
                    descriptor
                };
            }
        case "block":
            {
                if (resolution.symbol.keyword !== "enum") return unsupported(`${entityLabel} is typed by the ${resolution.symbol.keyword} "${resolution.symbol.name}", which is not a column type.`);
                const descriptor = input.enumTypeDescriptors.get(resolution.symbol);
                return descriptor === void 0 ? NOT_RESOLVED : {
                    ok: true,
                    descriptor
                };
            }
        case "model":
        case "compositeType":
            return unsupported(`${entityLabel} is typed by the ${resolvedKindLabel(resolution)} "${resolution.symbol.name}", which is not a column type.`);
        case "crossSpace":
            return unsupported(`${entityLabel} type "${field.typeName}" is a type of contract space "${field.typeContractSpaceId}"; only a relation field can name a type of another contract space.`);
    }
}
const PSL_INVALID_DEFAULT_SQL = "PSL_INVALID_DEFAULT_SQL";
const TAGGED_LITERAL_CANONICALIZATION_CODES = {
    nul: "PSL_TAGGED_LITERAL_NUL",
    "too-large": "PSL_TAGGED_LITERAL_TOO_LARGE"
};
function defaultValueExpression(node) {
    return [
        ...node.argList()?.args() ?? []
    ].find((arg)=>arg.colon() === void 0)?.value();
}
function listElements(expression) {
    const list = expression === void 0 ? void 0 : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$declarations$2d$5xLxC310$2d$R3$2d$Z4vcK$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ArrayLiteralAst$3e$__["ArrayLiteralAst"].cast(expression.syntax);
    return list === void 0 ? [] : [
        ...list.elements()
    ];
}
function rejectStrictListNullDefault(input) {
    if (input.field.elementOptional) return false;
    for (const arg of input.node.argList()?.args() ?? []){
        const expression = arg.value();
        const list = expression ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$declarations$2d$5xLxC310$2d$R3$2d$Z4vcK$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ArrayLiteralAst$3e$__["ArrayLiteralAst"].cast(expression.syntax) : void 0;
        for (const element of list?.elements() ?? []){
            const identifier = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$declarations$2d$5xLxC310$2d$R3$2d$Z4vcK$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__d__as__IdentifierAst$3e$__["IdentifierAst"].cast(element.syntax);
            if (identifier?.token()?.text !== "null") continue;
            input.diagnostics.push({
                code: "PSL_INVALID_DEFAULT_APPLICABILITY",
                message: `Field "${input.modelName}.${input.field.name}" has strict list elements and cannot use null in a literal list default. Make the element type nullable or remove null from the default.`,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$resolve$2d$C8PUf8zv$2d$QAvnPhCt$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__diagnosticSource$3e$__["diagnosticSource"])(input.sources, identifier.syntax).at()
            });
            return true;
        }
    }
    return false;
}
function lowerDefaultForField(input) {
    const node = getAttribute(input.field.attributes, "default")?.node;
    if (node === void 0) return {};
    const source = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$resolve$2d$C8PUf8zv$2d$QAvnPhCt$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__diagnosticSource$3e$__["diagnosticSource"])(input.sources, node.syntax);
    const spec = sqlAttributeSpecs.field.default(fieldSpecContext({
        symbols: input.symbolTable,
        model: input.model,
        field: input.field,
        binder: input.binder,
        controlMutationDefaults: {
            defaultFunctionRegistry: input.defaultFunctionRegistry
        },
        dataTypes: input.dataTypes
    }));
    const interpreted = interpretFieldAttribute({
        symbols: input.symbolTable,
        node,
        spec,
        model: input.model,
        field: input.field,
        sources: input.sources,
        binder: input.binder,
        diagnostics: input.diagnostics
    });
    if (interpreted === void 0) return {};
    const value = interpreted.value;
    if (Array.isArray(value) && value.includes(null) && rejectStrictListNullDefault({
        ...input,
        node
    })) return {};
    if (value === null) {
        if (!input.field.optional) {
            input.diagnostics.push({
                code: "PSL_INVALID_DEFAULT_APPLICABILITY",
                message: `Field "${input.modelName}.${input.fieldName}" is non-nullable and cannot use null as its literal default. Make the field nullable or use a non-null default.`,
                ...source.at()
            });
            return {};
        }
        return {
            defaultValue: {
                kind: "literal",
                value: null,
                canonical: true
            }
        };
    }
    const valueExpression = defaultValueExpression(node);
    const refusalLocation = (place)=>{
        if (place.kind === "attribute") return source.at();
        const expression = place.elementIndex === void 0 ? valueExpression : listElements(valueExpression)[place.elementIndex];
        if (expression === void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__["InternalError"](`Field "${input.modelName}.${input.fieldName}": the refused @default value has no written expression.`);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$resolve$2d$C8PUf8zv$2d$QAvnPhCt$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__diagnosticSource$3e$__["diagnosticSource"])(input.sources, expression.syntax).at();
    };
    const readsListElements = (written)=>input.isListColumn || input.field.list && written.kind === "list";
    const readAsLiteral = (written, sourceElementIndexes)=>{
        const lowered = lowerDataTypeDefault({
            written,
            sourceElementIndexes,
            isList: readsListElements(written),
            column: input.columnDescriptor,
            codecLookup: input.codecLookup,
            dataTypes: input.dataTypes,
            fieldPath: `${input.modelName}.${input.fieldName}`
        });
        if (!lowered.ok) {
            input.diagnostics.push({
                code: lowered.code,
                message: lowered.message,
                ...refusalLocation(lowered.place)
            });
            return {};
        }
        let restoredValue = lowered.value;
        if (Array.isArray(value) && value.includes(null) && Array.isArray(lowered.value)) {
            let index = 0;
            const nonNullValues = lowered.value;
            restoredValue = value.map((element)=>element === null ? null : nonNullValues[index++] ?? null);
        }
        if (input.valueObjectDefault !== void 0) {
            const { document, stored } = valueObjectDefaultDocument({
                stored: restoredValue,
                elementwise: readsListElements(written) && !input.isListColumn,
                codecId: input.columnDescriptor.codecId,
                codecLookup: input.codecLookup
            });
            const mismatches = valueObjectDefaultMismatches({
                fieldPath: `${input.modelName}.${input.fieldName}`,
                value: document,
                list: input.field.list,
                nullable: input.field.optional,
                elementNullable: input.field.elementOptional,
                ...input.valueObjectDefault,
                codecLookup: input.codecLookup,
                dataTypeLookup: input.dataTypes.lookup
            });
            for (const { code, message } of mismatches)input.diagnostics.push({
                code,
                message,
                ...source.at()
            });
            if (mismatches.length > 0) return {};
            return {
                defaultValue: {
                    kind: "literal",
                    value: stored,
                    canonical: true
                }
            };
        }
        return {
            defaultValue: {
                kind: "literal",
                value: restoredValue,
                canonical: true
            }
        };
    };
    const writtenScalar = (element)=>{
        if (typeof element === "string") return {
            kind: "string",
            text: element
        };
        if (typeof element === "boolean") return {
            kind: "boolean",
            value: element
        };
        if ("text" in element) return {
            kind: "number",
            text: element.text
        };
        const { canonicalization } = element;
        if (!canonicalization.ok) {
            input.diagnostics.push({
                code: TAGGED_LITERAL_CANONICALIZATION_CODES[canonicalization.reason],
                message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$temporal$2d$presets$2d$DUCEijgt$2d$CODhqGVy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__f__as__describeTaggedLiteralFailure$3e$__["describeTaggedLiteralFailure"])(canonicalization.reason),
                ...source.at(element.span)
            });
            return {
                ok: false
            };
        }
        return {
            kind: "tag",
            tag: element.tag,
            text: canonicalization.text
        };
    };
    const sqlExpressionDefault = (text, span)=>{
        const reserved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$validators$2d$Ddcw8nHL$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["o"])(text);
        const refusal = reserved === void 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$validators$2d$Ddcw8nHL$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(text) : `Write @default(${reserved}()) instead of sql\`${reserved}()\`; ${reserved}() is a Prisma default function, not raw SQL.`;
        if (refusal !== void 0) {
            input.diagnostics.push({
                code: PSL_INVALID_DEFAULT_SQL,
                message: refusal,
                ...source.at(span)
            });
            return {};
        }
        return {
            defaultValue: {
                kind: "function",
                expression: text
            }
        };
    };
    if (input.columnDescriptor.valueSet !== void 0) {
        if (typeof value === "string") return {
            defaultValue: {
                kind: "literal",
                value
            }
        };
        if (Array.isArray(value)) {
            const members = value.filter((element)=>element === null || typeof element === "string");
            if (members.length === value.length) return {
                defaultValue: {
                    kind: "literal",
                    value: members
                }
            };
        }
    }
    if (Array.isArray(value)) {
        const elements = [];
        const sourceElementIndexes = [];
        for (const [sourceIndex, element] of value.entries()){
            if (element === null) continue;
            const written = writtenScalar(element);
            if ("ok" in written) return {};
            elements.push(written);
            sourceElementIndexes.push(sourceIndex);
        }
        return readAsLiteral({
            kind: "list",
            elements
        }, sourceElementIndexes);
    }
    if (typeof value === "string") return readAsLiteral({
        kind: "string",
        text: value
    });
    if (typeof value === "boolean") return readAsLiteral({
        kind: "boolean",
        value
    });
    if ("text" in value) return readAsLiteral({
        kind: "number",
        text: value.text
    });
    if ("tag" in value) {
        const written = writtenScalar(value);
        if ("ok" in written) return {};
        const read = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$authoring$2d$DcJL9g8s$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__g__as__readWrittenValue$3e$__["readWrittenValue"])(input.dataTypes, written);
        if (read.ok && read.value.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$expression$2d$D7GsLgDM$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]) return sqlExpressionDefault((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$expression$2d$D7GsLgDM$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["s"])(read.value.value), value.span);
        return readAsLiteral(written);
    }
    if (typeof value === "object") {
        const context = {
            sourceId: input.sources.sourceFileFor(node.syntax).filename,
            modelName: input.modelName,
            fieldName: input.fieldName,
            columnCodecId: input.columnDescriptor.codecId
        };
        const lowered = lowerDefaultFunctionWithRegistry({
            call: value,
            registry: input.defaultFunctionRegistry,
            context,
            source
        });
        if (!lowered.ok) {
            if (lowered.kind === "owned") input.diagnostics.push(lowered.diagnostic);
            else input.diagnostics.pushExternal(lowered.diagnostic);
            return {};
        }
        if (lowered.value.kind === "storage") return {
            defaultValue: lowered.value.defaultValue
        };
        const generatorDescriptor = input.generatorDescriptorById.get(lowered.value.generated.id);
        if (!generatorDescriptor) {
            input.diagnostics.push({
                code: "PSL_INVALID_DEFAULT_APPLICABILITY",
                message: `Default generator "${lowered.value.generated.id}" is not available in the composed mutation default registry.`,
                ...source.at(value.span)
            });
            return {};
        }
        if (generatorDescriptor.applicableCodecIds === void 0) {
            input.diagnostics.push({
                code: "PSL_INVALID_DEFAULT_APPLICABILITY",
                message: `Default generator "${generatorDescriptor.id}" is not applicable to "@default(...)" lowering. Use the corresponding field preset (e.g. \`temporal.${generatorDescriptor.id === "timestampNow" ? "updatedAt" : generatorDescriptor.id}()\`) instead.`,
                ...source.at(value.span)
            });
            return {};
        }
        if (!generatorDescriptor.applicableCodecIds.includes(input.columnDescriptor.codecId)) {
            input.diagnostics.push({
                code: "PSL_INVALID_DEFAULT_APPLICABILITY",
                message: `Default generator "${generatorDescriptor.id}" is not applicable to "${input.modelName}.${input.fieldName}" with codecId "${input.columnDescriptor.codecId}".`,
                ...source.at(value.span)
            });
            return {};
        }
        return {
            executionDefaults: {
                onCreate: lowered.value.generated
            }
        };
    }
    return {};
}
function lowerEnumDefaultForField(input) {
    const { field, model, enumHandle, diagnostics } = input;
    const node = getAttribute(field.attributes, "default")?.node;
    if (node === void 0) return {};
    if (enumHandle.enumMembers.length === 0) return {};
    const interpreted = interpretFieldAttribute({
        node,
        spec: sqlAttributeSpecs.field.default(fieldSpecContext({
            symbols: input.symbolTable,
            model,
            field,
            binder: input.binder,
            controlMutationDefaults: {
                defaultFunctionRegistry: input.defaultFunctionRegistry
            },
            dataTypes: input.dataTypes
        })),
        symbols: input.symbolTable,
        model,
        field,
        sources: input.sources,
        binder: input.binder,
        diagnostics
    });
    if (interpreted === void 0) return {};
    const member = interpreted.value;
    if (Array.isArray(member)) {
        if (member.includes(null) && rejectStrictListNullDefault({
            ...input,
            node
        })) return {};
        return {
            defaultValue: {
                kind: "literal",
                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(member.map((entry)=>entry === null ? null : enumHandle.enumMembers.find((candidate)=>candidate.name === entry)?.value))
            }
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__invariant$3e$__["invariant"])(typeof member === "string", "the enum @default grammar admits only member identifiers, so the parsed value is a string");
    const match = enumHandle.enumMembers.find((m)=>m.name === member);
    if (!match) return {};
    return {
        defaultValue: {
            kind: "literal",
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(match.value)
        }
    };
}
const MODEL_COORDINATE_SEPARATOR = "\0";
function modelCoordinateKey(namespaceId, modelName) {
    return `${namespaceId}${MODEL_COORDINATE_SEPARATOR}${modelName}`;
}
const REMOVED_ATTRIBUTE_RULES = /* @__PURE__ */ new Map([
    [
        "updatedAt",
        {
            hint: "Use `temporal.updatedAt()` as a field-preset call instead.",
            suppressWhen: (field)=>field.typeConstructor?.path[0] === "temporal"
        }
    ]
]);
{
    const overlap = [
        ...REMOVED_ATTRIBUTE_RULES.keys()
    ].filter((name)=>Object.hasOwn(sqlAttributeSpecs.field, name));
    if (overlap.length > 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__["InternalError"](`Registered SQL field attributes and REMOVED_ATTRIBUTE_RULES must not overlap. Names in both: ${overlap.join(", ")}`);
}function describeUnsupportedSqlAttribute(sources) {
    return ({ attribute, level, owner, field })=>{
        if (owner.kind === "compositeType") return void 0;
        if (level === "model") {
            const source = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$resolve$2d$C8PUf8zv$2d$QAvnPhCt$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__diagnosticSource$3e$__["diagnosticSource"])(sources, owner.node.syntax);
            return {
                code: "PSL_UNSUPPORTED_MODEL_ATTRIBUTE",
                message: `Model "${owner.name}" uses unsupported attribute "@@${attribute.name}"`,
                ...source.at(attribute.span)
            };
        }
        if (field === void 0) return void 0;
        const source = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$resolve$2d$C8PUf8zv$2d$QAvnPhCt$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__diagnosticSource$3e$__["diagnosticSource"])(sources, field.node.syntax);
        if (attribute.name.startsWith("db.")) return {
            code: "PSL_UNSUPPORTED_FIELD_ATTRIBUTE",
            message: formatDbAttributeMigrationMessage(attribute),
            ...source.at(attribute.span)
        };
        const baseMessage = `Field "${owner.name}.${field.name}" uses unsupported attribute "@${attribute.name}"`;
        const removedRule = REMOVED_ATTRIBUTE_RULES.get(attribute.name);
        return {
            code: "PSL_UNSUPPORTED_FIELD_ATTRIBUTE",
            message: removedRule && !removedRule.suppressWhen(field) ? `${baseMessage}. ${removedRule.hint}` : baseMessage,
            ...source.at(attribute.span)
        };
    };
}
function extractFieldConstraintNames(input) {
    const idAttribute = getAttribute(input.field.attributes, "id");
    const uniqueAttribute = getAttribute(input.field.attributes, "unique");
    const idNode = getAttribute(input.field.attributes, "id")?.node;
    const idName = idNode === void 0 ? void 0 : interpretFieldAttribute({
        node: idNode,
        symbols: input.symbolTable,
        spec: sqlAttributeSpecs.field.id(),
        model: input.model,
        field: input.field,
        sources: input.sources,
        binder: input.binder,
        diagnostics: input.diagnostics
    })?.map;
    const uniqueNode = getAttribute(input.field.attributes, "unique")?.node;
    return {
        idAttribute,
        uniqueAttribute,
        idName,
        uniqueName: uniqueNode === void 0 ? void 0 : interpretFieldAttribute({
            node: uniqueNode,
            symbols: input.symbolTable,
            spec: sqlAttributeSpecs.field.unique(),
            model: input.model,
            field: input.field,
            sources: input.sources,
            binder: input.binder,
            diagnostics: input.diagnostics
        })?.map
    };
}
/**
* Interprets a field's `@noCheck` attribute and resolves it against the
* column's shape: the bare form becomes every kind the shape derives, and a
* named kind that can never apply is a spec-validation diagnostic on the
* attribute node. Returns the concrete kinds in canonical ascending order —
* the only form the definition tree carries.
*/ function lowerNoCheckForField(input) {
    const node = getAttribute(input.field.attributes, "noCheck")?.node;
    if (node === void 0) return void 0;
    const interpreted = interpretFieldAttribute({
        node,
        spec: sqlAttributeSpecs.field.noCheck(),
        symbols: input.symbolTable,
        model: input.model,
        field: input.field,
        sources: input.sources,
        binder: input.binder,
        diagnostics: input.diagnostics
    });
    if (interpreted === void 0) return void 0;
    const span = getAttribute(input.field.attributes, "noCheck")?.span ?? input.field.span;
    const subject = `Field "${input.model.name}.${input.field.name}"`;
    const derivable = [];
    if (input.isListColumn && !input.elementNullable) derivable.push("elementNotNull");
    if (input.isDomainEnum) derivable.push("membership");
    const authored = [
        interpreted.first,
        interpreted.second
    ].filter((kind)=>kind === "membership" || kind === "elementNotNull");
    if (authored.length === 0) {
        if (derivable.length === 0) {
            input.diagnostics.push({
                code: "PSL_INVALID_ATTRIBUTE_ARGUMENT",
                message: `${subject} @noCheck waives nothing — this column's shape derives no generated checks`,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$resolve$2d$C8PUf8zv$2d$QAvnPhCt$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__diagnosticSource$3e$__["diagnosticSource"])(input.sources, input.field.node.syntax).at(span)
            });
            return;
        }
        return derivable;
    }
    for (const kind of authored)if (!derivable.includes(kind)) {
        const explanation = kind === "membership" ? "membership checks are derived only from enum value sets" : "element-non-null checks are derived only for lists whose elements are semantically non-null";
        input.diagnostics.push({
            code: "PSL_INVALID_ATTRIBUTE_ARGUMENT",
            message: `${subject} @noCheck(${kind}) does not apply — ${explanation}`,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$resolve$2d$C8PUf8zv$2d$QAvnPhCt$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__diagnosticSource$3e$__["diagnosticSource"])(input.sources, input.field.node.syntax).at(span)
        });
        return;
    }
    return [
        ...authored
    ].sort();
}
function collectResolvedFields(input) {
    const { model, symbolTable, enumTypeDescriptors, namedTypeDescriptors, valueObjectTypes, authoringContributions, binder, targetId, defaultFunctionRegistry, dataTypes, generatorDescriptorById, diagnostics, sources, scalarColumnDescriptors, enumHandles, capabilities, namespaceId, namespaceExtensionEntities, codecLookup } = input;
    const resolvedFields = [];
    const valueObjectStorageTypeName = authoringContributions?.valueObjectStorageType;
    const declaredControlPolicy = getAttribute(model.attributes, "control")?.args.find((arg)=>arg.kind === "positional")?.value.trim();
    const modelDerivesChecks = declaredControlPolicy === void 0 || declaredControlPolicy === "managed";
    for (const field of Object.values(model.fields)){
        const source = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$resolve$2d$C8PUf8zv$2d$QAvnPhCt$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__diagnosticSource$3e$__["diagnosticSource"])(sources, field.node.syntax);
        const fieldTypeReference = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$psl$2d$parser$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["typeReferenceNode"])(field);
        const fieldTypeResolution = fieldTypeReference === void 0 ? void 0 : binder.symbolForNode(fieldTypeReference);
        const isModelField = fieldTypeResolution?.kind === "model";
        if (field.list && isModelField) continue;
        const relationAttribute = getAttribute(field.attributes, "relation");
        if (isModelField && relationAttribute) continue;
        if (field.typeContractSpaceId !== void 0 && relationAttribute) continue;
        if (isModelField) continue;
        const valueObjectName = fieldTypeResolution?.kind === "compositeType" ? fieldTypeResolution.symbol.name : void 0;
        const isValueObjectField = valueObjectName !== void 0;
        const isListField = field.list;
        const isListColumn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$derived$2d$checks$2d$DAbro9yn$2d$BgBbql$2d$q$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["a"])({
            list: isListField,
            typedByValueObject: isValueObjectField
        });
        let descriptor;
        let presetContributions;
        const resolveInput = {
            field,
            resolution: fieldTypeResolution,
            enumTypeDescriptors,
            namedTypeDescriptors,
            diagnostics,
            sources,
            entityLabel: `Field "${model.name}.${field.name}"`,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("namespaceId", namespaceId),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("namespaceExtensionEntities", namespaceExtensionEntities),
            codecLookup
        };
        if (isValueObjectField) {
            if (valueObjectStorageTypeName === void 0) {
                diagnostics.push({
                    code: "PSL_UNSUPPORTED_FIELD_TYPE",
                    message: `Field "${model.name}.${field.name}" is typed by the composite type "${field.typeName}", but the adapter of the stack declares no storage type for value objects, so the field has no column to be stored in.`,
                    ...source.at(field.span)
                });
                continue;
            }
            descriptor = scalarColumnDescriptors.get(valueObjectStorageTypeName);
            if (descriptor === void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__["InternalError"](`The stack declares "${valueObjectStorageTypeName}" as its value-object storage type, but it is not one of the stack's scalar types; the control stack checks this when it is assembled.`);
        } else if (isListField) {
            if (capabilities["sql"]?.["scalarList"] !== true) {
                diagnostics.push({
                    code: "PSL_SCALAR_LIST_UNSUPPORTED_TARGET",
                    message: `Field "${model.name}.${field.name}" is a scalar list, but target "${targetId}" does not support scalar lists (the adapter does not report the "scalarList" capability). Remove the list or author it against a target that supports scalar lists.`,
                    ...source.at(field.span)
                });
                continue;
            }
            const resolved = resolveFieldTypeDescriptor(resolveInput);
            if (!resolved.ok) continue;
            if (resolved.presetContributions) {
                diagnostics.push({
                    code: "PSL_PRESET_NOT_LIST",
                    message: `Field "${model.name}.${field.name}" uses a field-preset call as a list element type. Presets cannot be list elements; remove "[]" or use a scalar type.`,
                    ...source.at(field.span)
                });
                continue;
            }
            descriptor = resolved.descriptor;
        } else {
            const resolved = resolveFieldTypeDescriptor(resolveInput);
            if (!resolved.ok) continue;
            descriptor = resolved.descriptor;
            presetContributions = resolved.presetContributions;
        }
        if (!descriptor) continue;
        if (presetContributions && field.optional) {
            diagnostics.push({
                code: "PSL_PRESET_NOT_OPTIONAL",
                message: `Field "${model.name}.${field.name}" uses a field-preset call and cannot be optional. Remove "?" or use a different field type.`,
                ...source.at(field.span)
            });
            continue;
        }
        const defaultAttribute = getAttribute(field.attributes, "default");
        if (presetContributions && defaultAttribute) {
            diagnostics.push({
                code: "PSL_PRESET_AND_DEFAULT_CONFLICT",
                message: `Field "${model.name}.${field.name}" uses a field-preset call and cannot also declare @default(...). The preset already specifies the default value.`,
                ...source.at(defaultAttribute.span)
            });
            continue;
        }
        const enumHandle = fieldTypeResolution?.kind === "block" ? enumHandles.get(fieldTypeResolution.symbol) : void 0;
        const loweredDefault = defaultAttribute ? enumHandle ? lowerEnumDefaultForField({
            modelName: model.name,
            fieldName: field.name,
            field,
            model,
            symbolTable,
            sources: input.sources,
            binder: input.binder,
            enumHandle,
            defaultFunctionRegistry,
            dataTypes,
            diagnostics
        }) : lowerDefaultForField({
            modelName: model.name,
            fieldName: field.name,
            field,
            model,
            symbolTable,
            sources: input.sources,
            binder: input.binder,
            columnDescriptor: descriptor,
            isListColumn,
            valueObjectDefault: valueObjectName === void 0 ? void 0 : {
                valueObjectName,
                types: valueObjectTypes
            },
            generatorDescriptorById,
            defaultFunctionRegistry,
            dataTypes,
            codecLookup,
            diagnostics
        }) : {};
        const loweredOnCreate = loweredDefault.executionDefaults?.onCreate;
        if (isListField && loweredDefault.defaultValue?.kind === "function" && loweredDefault.defaultValue.expression === "autoincrement()") {
            diagnostics.push({
                code: "PSL_LIST_AUTOINCREMENT_UNSUPPORTED",
                message: `Field "${model.name}.${field.name}" is a list and cannot use autoincrement(); it is a Prisma marker for a sequence-backed scalar column, not SQL.`,
                ...source.at(defaultAttribute?.span ?? field.span)
            });
            continue;
        }
        if (isListField && loweredOnCreate) {
            const defaultExpression = defaultAttribute?.args.find((arg)=>arg.kind === "positional")?.value.trim() ?? "this function";
            diagnostics.push({
                code: "PSL_LIST_EXECUTION_DEFAULT_UNSUPPORTED",
                message: `Field "${model.name}.${field.name}" is a list and cannot use an execution default ("${defaultExpression}"). Lists have no per-element execution-default semantics; use a literal list @default or remove the default.`,
                ...source.at(defaultAttribute?.span ?? field.span)
            });
            continue;
        }
        if (field.optional && loweredOnCreate) {
            const generatorDescription = loweredOnCreate.kind === "generator" ? `"${loweredOnCreate.id}"` : "for this field";
            diagnostics.push({
                code: "PSL_INVALID_DEFAULT_FUNCTION_ARGUMENT",
                message: `Field "${model.name}.${field.name}" cannot be optional when using execution default ${generatorDescription}. Remove "?" or use a storage default.`,
                ...source.at(defaultAttribute?.span ?? field.span)
            });
            continue;
        }
        const mappedColumnName = storageName(field, input.physicalNames);
        const { idAttribute, uniqueAttribute, idName, uniqueName } = extractFieldConstraintNames({
            symbolTable: input.symbolTable,
            model,
            field,
            sources: input.sources,
            binder: input.binder,
            diagnostics
        });
        let isIdField = Boolean(idAttribute);
        if (idAttribute && isListField) {
            diagnostics.push({
                code: "PSL_LIST_ID_UNSUPPORTED",
                message: `Field "${model.name}.${field.name}" is a list and cannot be a primary key. Remove @id; a list cannot be an identity column.`,
                ...source.at(idAttribute.span)
            });
            continue;
        }
        if (idAttribute && field.optional) {
            diagnostics.push({
                code: "PSL_INVALID_ATTRIBUTE_ARGUMENT",
                message: `Field "${model.name}.${field.name}" @id cannot be optional; primary key columns must be NOT NULL`,
                ...source.at(idAttribute.span)
            });
            isIdField = false;
        }
        if (presetContributions && idAttribute && !presetContributions.id) {
            diagnostics.push({
                code: "PSL_PRESET_AND_ID_CONFLICT",
                message: `Field "${model.name}.${field.name}" uses a field-preset call and cannot also declare @id. Use a preset that contributes id semantics, or drop @id.`,
                ...source.at(idAttribute.span)
            });
            continue;
        }
        const fieldExecutionDefaults = presetContributions?.executionDefaults ?? loweredDefault.executionDefaults;
        const fieldDefaultValue = presetContributions?.default ?? loweredDefault.defaultValue;
        const noCheckKinds = modelDerivesChecks ? lowerNoCheckForField({
            symbolTable: input.symbolTable,
            model,
            field,
            sources: input.sources,
            binder: input.binder,
            isListColumn,
            elementNullable: field.elementOptional,
            isDomainEnum: enumHandle !== void 0,
            diagnostics
        }) : void 0;
        resolvedFields.push({
            field,
            columnName: mappedColumnName,
            descriptor,
            nullable: presetContributions?.nullable ?? field.optional,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("defaultValue", fieldDefaultValue),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("executionDefaults", fieldExecutionDefaults),
            isId: isIdField || Boolean(presetContributions?.id),
            isUnique: Boolean(uniqueAttribute) || Boolean(presetContributions?.unique),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("idName", idName),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("uniqueName", uniqueName),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("many", isListField ? true : void 0),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("noCheck", noCheckKinds),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("elementNullable", field.elementOptional ? true : void 0),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("valueObjectTypeName", valueObjectName),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("enumTypeHandle", enumHandle)
        });
    }
    return resolvedFields;
}
;
}),
];

//# sourceMappingURL=0q0o_orm-family-sql_dist_psl-field-resolution-DUCrDnuq-BXwISml1_mjs_20h77x1q_n62s._.js.map