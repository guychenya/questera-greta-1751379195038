import Card from '../components/Card';
import ReactECharts from 'echarts-for-react';
import { analyticsData } from '../data/mockData';
import { motion } from 'framer-motion';

export default function Analytics() {
  const salesData = {
    title: { text: 'Revenue Growth' },
    tooltip: { trigger: 'axis' },
    legend: { data: ['2023', '2024'] },
    xAxis: {
      type: 'category',
      data: analyticsData.revenueData.months
    },
    yAxis: { type: 'value' },
    series: [
      {
        name: '2023',
        type: 'line',
        smooth: true,
        data: analyticsData.revenueData.data2023,
        itemStyle: { color: '#4F46E5' }
      },
      {
        name: '2024',
        type: 'line',
        smooth: true,
        data: analyticsData.revenueData.data2024,
        itemStyle: { color: '#10B981' }
      }
    ]
  };

  const trafficSourceData = {
    title: { text: 'Traffic Sources' },
    tooltip: { trigger: 'item' },
    legend: { orient: 'vertical', left: 'left' },
    series: [{
      type: 'pie',
      radius: '50%',
      data: analyticsData.trafficSources,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };

  const deviceData = {
    title: { text: 'Device Distribution' },
    tooltip: { trigger: 'item' },
    legend: { orient: 'vertical', left: 'left' },
    series: [{
      type: 'pie',
      radius: ['40%', '70%'],
      data: analyticsData.deviceStats,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Analytics & Reports</h1>
        <div className="flex space-x-2">
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>Last 12 months</option>
          </select>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700">
            Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {analyticsData.metrics.map((metric, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className={`p-6 rounded-lg bg-${metric.color}-50`}
          >
            <h3 className={`text-sm font-medium text-${metric.color}-600`}>{metric.title}</h3>
            <p className="mt-2 text-3xl font-semibold text-gray-900">{metric.value}</p>
            <p className={`mt-2 text-sm ${metric.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
              {metric.trend} from last period
            </p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Revenue Overview">
          <ReactECharts option={salesData} style={{ height: '400px' }} />
        </Card>
        
        <div className="grid grid-cols-1 gap-6">
          <Card title="Traffic Sources">
            <ReactECharts option={trafficSourceData} style={{ height: '200px' }} />
          </Card>
          
          <Card title="Device Distribution">
            <ReactECharts option={deviceData} style={{ height: '200px' }} />
          </Card>
        </div>
      </div>
    </div>
  );
}