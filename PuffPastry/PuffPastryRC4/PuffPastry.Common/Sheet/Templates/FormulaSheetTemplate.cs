using ClosedXML.Excel;

namespace PuffPastry.Common.Sheet.Templates;

public class FormulaSheetTemplate
{
  internal static void Transcribe(XLWorkbook ledger)
  {
    /* adds data and formulas to the spreadsheet named FormulaSheet */
    var formulaSheet = ledger.Worksheet("FormulaSheet");
    formulaSheet.Cell("B1").Value = "Values";
    formulaSheet.Cell("B2").Value = 4.55;
    formulaSheet.Cell("B3").Value = 2.55;
    formulaSheet.Cell("B4").Value = 4.2;
    formulaSheet.Cell("B5").Value = 3.33;
    formulaSheet.Cell("A6").Value = "Sum";
    formulaSheet.Cell("A7").Value = "Average";
    formulaSheet.Cell("B6").FormulaA1 = "SUM(B2:B5)";
    formulaSheet.Cell("B7").FormulaA1 = "AVERAGE(B2:B5)";
    /* performs calculations programmatically */
    List<decimal> decimalNumbers = new();
    decimalNumbers.Add(formulaSheet.Cell("B2").GetValue<decimal>());
    decimalNumbers.Add(formulaSheet.Cell("B3").GetValue<decimal>());
    decimalNumbers.Add(formulaSheet.Cell("B4").GetValue<decimal>());
    decimalNumbers.Add(formulaSheet.Cell("B5").GetValue<decimal>());
    formulaSheet.Cell("C1").Value = "compute programmatically";
    formulaSheet.Cell("C6").Value = decimalNumbers.Sum();
    formulaSheet.Cell("C7").Value = decimalNumbers.Sum() / decimalNumbers.Count();
  }
}
