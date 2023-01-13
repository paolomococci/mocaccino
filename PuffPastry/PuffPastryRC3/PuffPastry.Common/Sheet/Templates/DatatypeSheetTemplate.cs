using ClosedXML.Excel;

namespace PuffPastry.Common.Sheet.Templates;

public class DatatypeSheetTemplate
{
  internal static void Transcribe(XLWorkbook ledger)
  {
    int row = 2;
    int column = 2;
    /* adds data to the spreadsheet named DatatypeSheet */
    var datatypeSheet = ledger.Worksheet("DatatypeSheet");

    datatypeSheet.Cell(row, column).SetValue("Simple text examples:");
    datatypeSheet.Cell(row, (column + 1)).SetValue("Hello everyone!");
    datatypeSheet.Cell(++row, (column + 1)).SetValue("Happy New Year.");

    datatypeSheet.Cell(++row, column).SetValue("Date examples:");
    datatypeSheet.Cell(row, (column + 1)).SetValue(new DateTime(2023, 1, 1));
    datatypeSheet.Cell(++row, (column + 1)).SetValue(new DateTime(2023, 1, 2));

    datatypeSheet.Cell(++row, column).SetValue("Examples of date and time:");
    datatypeSheet.Cell(row, (column + 1)).SetValue(new DateTime(2023, 1, 2, 2, 0, 0));
    datatypeSheet.Cell(++row, (column + 1)).SetValue(new DateTime(2023, 1, 2, 3, 0, 0));

    datatypeSheet.Cell(++row, column).SetValue("Examples of Boolean values:");
    datatypeSheet.Cell(row, (column + 1)).SetValue(true);
    datatypeSheet.Cell(++row, (column + 1)).SetValue(false);

    datatypeSheet.Cell(++row, column).SetValue("Examples of numeric values:");
    datatypeSheet.Cell(row, (column + 1)).SetValue(10);
    datatypeSheet.Cell(++row, (column + 1)).SetValue(10.25f);
    datatypeSheet.Cell(++row, (column + 1)).SetValue(10.25);
    datatypeSheet.Cell(++row, (column + 1)).SetValue(10.25m);

    datatypeSheet.Cell(++row, column).SetValue("Examples of time span:");
    datatypeSheet.Cell(row, (column + 1)).SetValue(new TimeSpan(0, 15, 0));
    datatypeSheet.Cell(++row, (column + 1)).SetValue(new TimeSpan(1, 30, 30));
  }
}
