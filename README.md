# Fabric保险网络
这款应用搭建在Hyperledger Fabric之上，模拟了客户、商家、保险公司、警察机关之间的密切协作。客户购买商品及其保险，若是商品损坏、丢失，可向保险公司申请赔偿。在物品丢失的情况下，客户需要首先向警察机关报失登记，警察机关确认后，保险公司根据保单规则赔偿。

## 网络部署
1. 首先，进入fixtures文件夹
   ```
   cd fixtures
   ```
2. 拉取工具、镜像
   ```
   make dep
   ```
    拉取的文件位于fixtures下的bin和config，拉取的镜像通过docker images命令查看
3. 新建网络
   ```
   make new
   ```
4. 查看网络状态:
    ```
    docker ps
    ```

## 启动服务
1. 进入server文件夹
   ```
   cd server
   ```
2. 启动web服务
   ```
   go run .
   ```
3. 浏览器访问web应用:localhost:8000

## 关闭
1. ctrl + c 终止web服务
2. 在fixtures目录下，执行 make destroy销毁网络