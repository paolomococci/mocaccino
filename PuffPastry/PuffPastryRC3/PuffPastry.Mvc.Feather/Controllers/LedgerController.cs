using Microsoft.AspNetCore.Mvc;
using PuffPastry.Common.Models;

namespace PuffPastry.Mvc.Feather.Controllers;

public class LedgerController : Controller
{
  private readonly ILogger<LedgerController> _logger;

  public LedgerController(
    ILogger<LedgerController> logger
  )
  {
    this._logger = logger;
  }

  public IActionResult Index()
  {
    return View();
  }

  public FileContentResult Download()
  {
    using (MemoryStream memoryStream = new MemoryStream()) {
      return this.File(
        fileContents: LedgerModel.Perform(memoryStream),
        contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        fileDownloadName: "Ledger.xlsx"
      );
    }
  }
}
