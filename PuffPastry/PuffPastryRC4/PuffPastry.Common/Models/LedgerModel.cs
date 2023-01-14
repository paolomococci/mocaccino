using ClosedXML.Excel;
using PuffPastry.Common.Sheet.Templates;

namespace PuffPastry.Common.Models;

public class LedgerModel
{
  public static byte[] Perform(MemoryStream memoryStream)
  {

    /* generate the workbook */
    XLWorkbook ledger = new XLWorkbook();

    /* adds three spreadsheets */
    List<string> sheetNames = new List<string>() {
        "FormulaSheet",
        "DatatypeSheet",
        "PinnedSheet",
        "PivotSheet"
      };
    foreach (var sheetName in sheetNames)
    {
      var sheet = ledger.Worksheets.Add(sheetName);
      sheet.Cell("A1").Value = sheetName;
    }

    FormulaSheetTemplate.Transcribe(ledger);
    DatatypeSheetTemplate.Transcribe(ledger);
    PinnedSheetTemplate.Transcribe(ledger);

    /* pack it all up */
    ledger.SaveAs(memoryStream);
    memoryStream.Seek(
      0,
      SeekOrigin.Begin
    );
    return memoryStream.ToArray();
  }
}
