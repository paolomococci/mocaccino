using Microsoft.AspNetCore.Mvc;

namespace PuffPastry.Mvc.Feather.Controllers;

public class LedgerController : Controller {
  private readonly ILogger<LedgerController> _logger;

  public LedgerController(
    ILogger<LedgerController> logger
  ) {
    this._logger = logger;
  }

  public IActionResult Index()
  {
    return View();
  }
}
