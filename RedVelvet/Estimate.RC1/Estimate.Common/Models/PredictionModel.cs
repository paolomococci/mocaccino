using Microsoft.ML.Data;

namespace Estimate.Common.Models;

public class PredictionModel
{

  [ColumnName("Score")]
  public float Price { get; set; } = 0.0F;
}
