import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) { }

    // add a user
    @Post('/create')
    async adduser(@Res() res, @Body() createuserDTO: CreateUserDTO) {
        const user = await this.userService.addUser(createuserDTO);
        return res.status(HttpStatus.OK).json({
            message: "user has been created successfully",
            user
        })
    }

    // Retrieve users list
    @Get('users')
    async getAlluser(@Res() res) {
        const users = await this.userService.getAllUsers();
        return res.status(HttpStatus.OK).json(users);
    }

    // Fetch a particular user using ID
    @Get('user/:userID')
    async getuser(@Res() res, @Param('userID') userID) {
        const user = await this.userService.getUser(userID);
        if (!user) throw new NotFoundException('user does not exist!');
        return res.status(HttpStatus.OK).json(user);
    }

        // Update a user's details
        @Put('/update')
        async updateuser(@Res() res, @Query('userID') userID, @Body() createuserDTO: CreateUserDTO) {
            const user = await this.userService.updateUser(userID, createuserDTO);
            if (!user) throw new NotFoundException('user does not exist!');
            return res.status(HttpStatus.OK).json({
                message: 'user has been successfully updated',
                user
            });
        }
    
        // Delete a user
        @Delete('/delete')
        async deleteuser(@Res() res, @Query('userID') userID) {
            const user = await this.userService.deleteUser(userID);
            if (!user) throw new NotFoundException('user does not exist');
            return res.status(HttpStatus.OK).json({
                message: 'user has been deleted',
                user
            })
        } 



}
