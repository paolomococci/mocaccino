namespace Estimate.Mvc.Feather.Models;

public class ErrorViewModel
{
  public string? RequestId { get; set; }

  public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
}
