using System;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using AngularTestSeparate.Models.Order;
using Microsoft.Extensions.Configuration;

namespace MonoRepoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : Controller
    {
        private readonly IConfiguration _config;

        public OrderController(IConfiguration config)
        {
            _config = config;
        }

        [HttpGet]
        [Route("getDate")]
        public ActionResult<DateTime> GetCurrentDate()
        {
            var date = DateTime.Now;

            return date;
        }

        [HttpGet]
        [Route("getById/{id}")]
        public async Task<ActionResult<Order>> GetOrderById(int id)
        {
            var order = await GetOrderBiz(id);

            return order;
        }

        [ApiExplorerSettings(IgnoreApi = true)]
        public async Task<DataTableReader> GetOrderData(int id)
        {
            DataTable dt = new DataTable();
            SqlConnection cn = new SqlConnection();
            SqlCommand cmd = new SqlCommand("[dbo].[spOrder_get]", cn);
            cmd.CommandType = CommandType.StoredProcedure;
            SqlParameter param = new SqlParameter();

            param = cmd.Parameters.Add("@prmId", SqlDbType.Int);
            param.Direction = ParameterDirection.Input;
            param.Value = id;

            cn.ConnectionString = _config.GetConnectionString("TestConnection");
            SqlDataAdapter da = new SqlDataAdapter(cmd);

            cn.Open();
            using (cn)
            {
                da.Fill(dt);
            }
            cmd.Dispose();
            DataTableReader dr = dt.CreateDataReader();
            dt.Dispose();
            return dr;
        }

        [ApiExplorerSettings(IgnoreApi = true)]
        public async Task<Order> GetOrderBiz(int id)
        {
            var dr = await GetOrderData(id);
            var order = new Order();
            if (dr.HasRows)
            {
                dr.Read();
                order.Id = dr.IsDBNull(dr.GetOrdinal("Id")) ? 0 : dr.GetInt32(dr.GetOrdinal("Id"));
                order.LegNumber = dr.IsDBNull(dr.GetOrdinal("LegNumber")) ? 0 : dr.GetInt32(dr.GetOrdinal("LegNumber"));
                order.OrderNumber = dr.IsDBNull(dr.GetOrdinal("OrderNumber")) ? 0 : dr.GetInt32(dr.GetOrdinal("OrderNumber"));
            }

            return order;
        }
    }
}
