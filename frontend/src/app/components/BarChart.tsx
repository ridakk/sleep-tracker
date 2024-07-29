'use client';

import { useEffect, useState } from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, TitleComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import useFetch from '../hooks/useFetch';
import Alert from '@mui/material/Alert';

echarts.use([TitleComponent, TooltipComponent, GridComponent, BarChart, CanvasRenderer]);

export default function BasicBarChart({ username }: { username: string }) {
  const [loading, data, error] = useFetch<{ date: string; sum: number }>(`/v1/reports/weekly?name=${username}`);

  const [options, setOptions] = useState({});

  useEffect(() => {
    if (!data) {
      setOptions([]);
      return;
    }

    setOptions({
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        data: data.map((item) => item.date),
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          rotate: 30,
        },
      },
      yAxis: {
        axisLabel: {
          formatter: '{value} hours',
          align: 'right',
        },
      },
      series: [
        {
          type: 'bar',
          data: data.map((item) => item.sum),
        },
      ],
    });
  }, [data]);

  return (
    <>
      {error && <Alert severity="error">{error.details}</Alert>}
      <ReactEChartsCore
        echarts={echarts}
        option={options}
        notMerge={true}
        lazyUpdate={true}
        theme={'theme_name'}
        showLoading={loading}
      />
    </>
  );
}
