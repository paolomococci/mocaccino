using ClosedXML.Excel;

namespace PuffPastry.Common.Sheet.Templates;

public class PivotSheetTemplate
{
  internal static void Transcribe(
    XLWorkbook ledger, 
    IXLTable xLTable
  )
  {
    var pivotSheet = ledger.Worksheet("PivotSheet");
  }
}
